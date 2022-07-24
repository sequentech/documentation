---
id: ballot-encoding
title: Ballot Encoding
sidebar_label: Ballot Encoding
slug: /file-formats/ballot-encoding
---

## Introduction

When encrypting ballots using ElGamal over multiplicative groups, ballot information must converted to an integer. This integer `m`, needs to fall
in the range `1 <= m <= q` where `q` is the order of the subgroup used in the election parameters. Otherwise the ballot would require 
multiple ciphertexts and that would make things more complex and slow.

Thus we have devised a specific procedure that is reasonably efficient to encode
the ballots. It is a two steps process:
1. First a json ballot needs to be encoded into a [mixed-radix](https://en.wikipedia.org/wiki/Mixed_radix) representation, which is equivalent to a list of bases and  an equally sized list of digits.
2. Then we obtain the integer corresponding to the mixed-radix representation, following a generalization of [horner's method](https://en.wikipedia.org/wiki/Horner%27s_method) as applied to positional number systems.
 
So the first step we apply is to encode the ballot as a list of bases and a
list of digits, which consitutute the mixed-radix representation of the ballot. Then we convert this mixed-radix representation to its equivalent integer, to be encrypted with ElGamal.

Note that the required bases present in a mixed-radix representation are determined on a per-contest basis, according to the range of ballot values that contest needs to encode. These bases are therefore common to all ballots for the contest. Conversely, the list of values that a particular ballot encodes is naturally specific to that ballot.

## Basics

If in a `plurality-at-large` there are three candidates `A`, `B`,
and `C` with answer ids `0`, `1` and `2`, and the voter wants to
vote to candidates `A` and `C`, then his ballot choices (obtained
using encodeRawBallot) will be  `choices = [1, 0, 1]` and the encoded
choices will be encoded this way:

```python
           /-------- candidate A
           |  /----- candidate B
           |  |  /-- candidate C
           |  |  |
bases   = [2, 2, 2]
choices = [1, 0, 1]

encodedChoices = choices[0] + choices[1]*bases[0] + choices[2]*bases[0]*bases[1]
encodedChoices = choices[0] + bases[0]*(choices[1] + bases[1]*choices[2])
encodedChoices = 1 + 2*(0 + 2*1) = 1 + 4*1 = 5
```

And the bases are `bases = [2, 2, 2]`. The reason the bases are 2 here
is because plurality-at-large is a non-preferential voting system
and each base is representing if the voter chose (then we use
`choices[x] = 1`) or not (then we use `choices[x] = 0`), and the base is in
this case max(v[x])+1`.

## Preferential systems

In a preferential system, the voter can choose a specific ordering.
If we reuse the previous example, the voter might have chosen for
the first choice in his ballot candidate `A`, and for his second
choice candidate `B`. Not choosing a candidate would be encoded as
value `0`, so choosing it as first position would be value `1` and
so on. If the voter can choose up to 3 candidates, then the base
would be `maxChoices+1 = 3+1 = 4`, and thus bases will be
`bases = [4, 4, 4]` and choices would be `choices = [1, 0, 2]` and the
encoded choices would be calculated as:

```python
           /-------- candidate A
           |  /----- candidate B
           |  |  /-- candidate C
           |  |  |
bases   = [4, 4, 4]
choices = [1, 0, 2]

encodedChoices = choices[0] + choices[1]*bases[1] + choices[2]*bases[1]*bases[2]
encodedChoices = choices[0] + bases[0]*(choices[1] + bases[1]*choices[2])
encodedChoices = 1 + 4*(0 + 4*2) = 1 + 16*2 = 33
```

## Invalid Ballot Flag

What was outlined before is the basics, but actually it does not
work exactly like that. The first value (`choices[0]`) in the raw 
ballot does not really represent the vote for the first candidate 
answer, but it's always a flag saying if the ballot was marked as 
invalid or not by the voter. Note that this is not the only way to
create an invalid ballot. For example the voter could vote to more
options than allowed, and that would also be an invalid ballot.

We asume the invalid ballot flag is represented in the question
as a answer inside `question.answers` and it is flagged by having
an element in `answer.urls` as
`{title: 'invalidVoteFlag', url: 'true'}`. If this invalid vote
flag candidate is not present, the voter interface will simply not
allow to cast an invalid vote.

Using the last example of a preferential vote, the bases would not
be `bases = [4, 4, 4]` but `bases = [2, 4, 4, 4]`. The first base 
encodes always the invalid flag, whose max value is `1` so the base 
is always `2`.

The choices would not be `choices = [1, 0, 2]` but, if the vote was
not marked as invalid, `choices = [0, 1, 0, 2]` and thus the encoded
choices would be calculated as:

```python
           /----------- invalid vote flag
           |  /-------- candidate A
           |  |  /----- candidate B
           |  |  |  /-- candidate C
           |  |  |  |
bases   = [2, 4, 4, 4]
choices = [0, 1, 0, 2]

encodedChoices = choices[0] + bases[0]*(choices[1] + bases[1]*(choices[2] + bases[2]*choices[3])
encodedChoices = 0 + 2*(1 + 4*(0 + 4*2)) = 2*1 + 2*4*4*2
encodedChoices = 2*1 + 32*2 = 66
```

## Cumulative voting system

In a cumulative voting system, the voter would have a total number
of integer points to assign to candidates, and the voter can assign
them to the available candidates with a maximum number of options
that can be assigned to each candidate.

For example, the voter might be able to assign up to 2 points to
each candidate and assign a total of 3 points. In practice, the
encoding is done in a very similar format as with preferential
voting system. For each candidate, the value we assign is a number
that represents the points assigned to the candidate, and the base
used is the maximum number of assignable points plus one.

Retaking the previous example used for plurality-at-large and used
for a preferential voting system, if the voter can assign a
maximum of 4 points, and he wants to assign 2 points to candidate
`A` and 2 points to candidate `C` and he didn't mark his ballot
as invalid, then his choices would be `choices = [0, 2, 0, 1]`, 
the bases would be `bases = [2, 5, 5, 5]` and the encoded choices 
would be calculated as:

```python
           /----------- invalid vote flag
           |  /-------- candidate A
           |  |  /----- candidate B
           |  |  |  /-- candidate C
           |  |  |  |
choices = [0, 2, 0, 1]
bases   = [2, 5, 5, 5]

encodedChoices = choices[0] + bases[0]*(choices[1] + bases[1]*(choices[2] + bases[2]*choices[3])
encodedChoices = 0 + 2*(2 + 5*(0 + 5*1)) = 2*2 + 2*5*5*1
encodedChoices = 2*2 + 50*1 = 54
```

## Write-ins

This encoder supports write-ins. The idea of write-ins is that the
voter can choose candidates that are not in the preconfigured list
of candidates. The maximum number of write-ins allowed is
calculated automatically by suppossing the voter tries to
distribute his vote entirely just for write-in candidates, which
is usually `question.max`.

The vote for each write-in is encoded using the same procedure as
for normal candidates, in order and as if the write-ins were in
the list of candidates. It asumes all write-ins (even if not
selected) are in the list of candidates and they are flagged as
such simply by an element in `answer.urls` as
`{"title": "isWriteIn", "url": "true"}`.

For example in a plurality-at-large question example with three
normal candidates `A`, `B` and `C` and two write-ins, where the
voter can choose up to 2 candidates, if the voter wants to cast 
a valid ballot to his 2 write-ins, then the bases, the choices 
and the encoded choices would be:

```python
           /----------------- invalid-flag
           |  /-------------- A
           |  |  /----------- B
           |  |  |  /-------- C
           |  |  |  |  /----- 1st write-in
           |  |  |  |  |  /-- 2nd write-in
           |  |  |  |  |  |
bases   = [2, 2, 2, 2, 2, 2]
choices = [0, 0, 0, 0, 1, 1]

encodedChoices = 1*2^4 + 1*2^5 = 48
```

### Write-in names

Of course that's not a complete ballot with write-ins. If the voter
voted to the write-ins, we would also have to encode the free text
string of the name of the write-ins. This is done by converting the
text from UTF-8 to numeric bytes, and encoding each byte using
2^8 = 256 as a base. The separation between the different write-in
names is done using an empty byte (so `choices[x] = 0`).

So if in our case the name of the voter's two write-ins is `D` and
`Ed`, and knowing that character `D` is encoded as number `68`, `E`
is `69` and `d` is `100`, then the bases, the choices and the 
encoded choices would be:

```python
           /----------------- invalid-flag
           |  /-------------- A vote
           |  |  /----------- B vote
           |  |  |  /-------- C vote
           |  |  |  |  /----- 1st write-in vote
           |  |  |  |  |  /-- 2nd write-in vote
           |  |  |  |  |  |
           |  |  |  |  |  |     /---- 1st write-in name ("D")
           |  |  |  |  |  |     |
           |  |  |  |  |  |     |            /---- 2nd write-in name ("Ed")
           |  |  |  |  |  |     |            |
           |  |  |  |  |  |   /----\    /---------\
           |  |  |  |  |  |   |    |    |         |
bases   = [2, 2, 2, 2, 2, 2, 256, 256, 256, 256, 256]
choices = [0, 0, 0, 0, 1, 1, 68,  0,   69,  100, 0  ]

encodedChoices = 1*(2^4) + 1*(2^5) + 68*(2^6) + 69*(2^6)*(256^2) + 100*(2^6)*(256^3) = 107663593776
```

Even if the voter voted to no write-in, we still encode each of the write-ins
with a 0 choice. So for example if the voter voted to the first candidate (`A`
in our example), the full encoding would be:


```python
           /----------------- invalid-flag
           |  /-------------- A vote
           |  |  /----------- B vote
           |  |  |  /-------- C vote
           |  |  |  |  /----- 1st write-in vote
           |  |  |  |  |  /-- 2nd write-in vote
           |  |  |  |  |  |
           |  |  |  |  |  |   /---- 1st write-in name (empty string)
           |  |  |  |  |  |   |
           |  |  |  |  |  |   |    /---- 2nd write-in name (empty string)
           |  |  |  |  |  |   |    |
           |  |  |  |  |  |   |    |
bases   = [2, 2, 2, 2, 2, 2, 256, 256]
choices = [0, 1, 0, 0, 0  0, 0,   0  ]

encodedChoices = 1*(2**1) = 2
```
