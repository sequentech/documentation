---
id: parent-and-children-elections
title: Parent and Children Elections
sidebar_label: Parent & Children Elections
slug: /advanced-elections/parent-and-children-elections
---

In this document we will review how to create parent and children elections 
and what are their characteristics.

Sometimes it's required in advanced elections to have some common questions
available for all the electorate, and some other questions available to only
some of them. For the common questions you might want to have a tally from
each of these districts, and also a consolidated tally with all of them.

## Virtual vs Parent elections

:::info Enabling Virtual Elections
Virtual elections are not enabled by default because for security reasons 
virtual elections should not be enabled in multi-tenant deployments, as 
`agora-elections` do not verify that the election creator has permissions for
accessing the sub-elections.
:::

There are two different possible types of relations between 
elections:
1. A [virtual election](election-creation.md#election-virtual) and its respective 
[virtual subelections](election-creation.md#election-virtualSubelections).
2. A [parent election](election-creation.md#election-parent_id) and its respective 
[children elections](election-creation.md#election-children_election_info).

The first kind of relation (virtual elections and virtual subelections) is 
established in `agora-elections`, and its use is allows for electoral results
consolidation.

The second kind of relation is established in `authapi` and its use is more
related to the authentication, authorization and presentation behaviour in the
earlier stages of an election, for example during login.

Both are closely related/coupled, because usually you want to do both or none. 
The separation exists simply because `authapi` and `agora-elections` are
different modules that have separated databases.

## Parent and children elections

When a set of election have a parent-children relationship, they have the 
following behaviour:
1. In the Admin election list, the children elections are hidden by default and
only shown as a dropdown of the parent election.
2. In the Admin election dashboard, the parent election can manage the children
elections. For example starting or stopping the parent election starts/stops 
the children elections automatically. The parent election dashboard also allows
to trigger the tally of specific subelections with a chooser widget, and also
allows to switch to see the election results of specific children elections.
3. In the Admin election Census Data, you can assign to each voter a subset of 
the children elections, to allow a specific subset of children elections. The
Census Data section also allows you to view in which children elections has any
voter voted.
4. In the parent election results public website, there's a chooser widget to
choose which children election results to visualize.
5. In the voting booth, after authentication the voter will vote without having
to authenticate again in  the assigned children election in their 
[natural order](election-creation.md#child-election-natural_order) sequentially. 
If a voter does  not vote to all the children elections assigned to this voter, 
then he will be able to authenticate again and vote in the next unvoted 
children election.

## Basic University elections example

Apart from the brief description above, we recommend you delve in to the details
of election creation reading the 
[election creation documentation](election-creation.md) for reference 
documentation.

In this tutorial we are going to create an university electoral process 
compromised of 3 different elections. The electoral process contains 3 Yes/No 
questions:

1. **For Everyone**: Do you want John to be the University Dean?
2. **For Students**: Do you want Mary to be the Students' Representative?
2. **For Professors**: Do you want Robert to be the Faculty representative?

![Questions and voter groups](./assets/questions_and_voter_groups.svg)

To replicate this, we can use parent and children elections. We would have
something like this:

![Elections and Questions](./assets/elections_and_questions.svg)

In the graphic above the question indexes within each election is indicated 
between brackets like `[0]`.

We will create the elections as described in 
[Election Creation Guide](election-creation.md). The
[Election JSON settings](election-creation.md#election-json-settings) will be
similar to the following sketch:

```json title="university_elections_1.json"
[
  {
    "id": 1,
    "title": "Electoral Process",
    "children_election_info": {
      "natural_order": [2, 3],
      "presentation": {
        "categories": [
          {
            "events": [
              {"event_id": 2, "title": "Students"},
              {"event_id": 3, "title": "PRofessors"}
            ],
            "id": 2,
            "title": "Sectors"
          }
        ]
      }
    },
    "questions": [
      {
        "title": "Q1: Do you want John to be the University Dean?",
        "answers": [
          {"id": 0, "text": "Yes"},
          {"id": 1, "text": "No"}
        ]
      },
      {
        "title": "Q2: Do you want Mary to be the Students' Representative?",
        "answers": [
          {"id": 0, "text": "Yes"},
          {"id": 1, "text": "No"}
        ]
      },
      {
        "title": "Q3: Do you want Robert to be the Faculty representative?",
        "answers": [
          {"id": 0, "text": "Yes"},
          {"id": 1, "text": "No"}
        ]
      },
    ],
    // ..other properties..
  },
  {
    "id": 2,
    "title": "Students election",
    "parent_id": 1,
    "questions": [
      {
        "title": "Q1: Do you want John to be the University Dean?",
        "answers": [
          {"id": 0, "text": "Yes"},
          {"id": 1, "text": "No"}
        ]
      },
      {
        "title": "Q2: Do you want Mary to be the Students' Representative?",
        "answers": [
          {"id": 0, "text": "Yes"},
          {"id": 1, "text": "No"}
        ]
      }
    ],
    // ..other properties..
  },
  {
    "id": 3,
    "title": "Professors election",
    "parent_id": 1,
    "questions": [
      {
        "title": "Q1: Do you want John to be the University Dean?",
        "answers": [
          {"id": 0, "text": "Yes"},
          {"id": 1, "text": "No"}
        ]
      },
      {
        "title": "Q3: Do you want Robert to be the Faculty representative?",
        "answers": [
          {"id": 0, "text": "Yes"},
          {"id": 1, "text": "No"}
        ]
      }
    ],
    // ..other properties..
  }
]
```

That's the configuration regarding the questions and the parent-children 
relations. See 
[children_election_info](election-creation.md#election-children_election_info)
for details.

In reality, the questions set in the parent election are not used for much. For
results' consolidation in the parent election you could just use the appropiate
[Results Config Pipes](election-creation.md#results-config-pipes) to clone the 
election from the subelections. We will do something similar later on. Note 
however that it's  required for all election to be created with at least one 
question.

What follows is a more is the same JSON configuration but we only sketched the
information regarding the virtual elections and 
[results config pipes](election-creation.md#results-config-pipes):

```json title="university_elections_2.json"
[
  {
    "id": 1,
    "virtual": true,
    "virtualSubelections": [2,3],
    "resultsConfig": [
      [
        // We source votes from source subelection questions to the 
        // appropiate parent questions.
        "agora_results.pipes.multipart.multipart_tally_plaintexts_append_joiner",
        {
          "mappings": [
            {
              // From: Students Election #2 | Q1
              "source_election_id": 1,
              "source_question_num": 0,
              // To: Electoral Process #1 | Q1
              "dst_election_id": 0,
              "dst_question_num": 0
            },
            {
              // From: Professors Election #3 | Q1
              "source_election_id": 2,
              "source_question_num": 0,
              // To: Electoral Process #1 | Q1
              "dst_election_id": 0,
              "dst_question_num": 0
            },
            {
              // From: Students Election #2 | Q2
              "source_election_id": 1,
              "source_question_num": 1,
              // To: Electoral Process #1 | Q2
              "dst_election_id": 0,
              "dst_question_num": 1
            },
            {
              // From: Professors Election #3 | Q3
              "source_election_id": 2,
              "source_question_num": 1,
              // To: Electoral Process #1 | Q3
              "dst_election_id": 0,
              "dst_question_num": 2
            },
          ]
        }
      ]
      ["agora_results.pipes.results.do_tallies", {}],
      ["agora_results.pipes.sort.sort_non_iterative", {}]
    ]
    // .. other properties..
  },
  {
    "id": 2,
    "resultsConfig": [
      ["agora_results.pipes.results.do_tallies", {}],
      ["agora_results.pipes.sort.sort_non_iterative", {}]
    ]
    // .. other properties..
  },
  {
    "id": 3,
    "resultsConfig": [
      ["agora_results.pipes.results.do_tallies", {}],
      ["agora_results.pipes.sort.sort_non_iterative", {}]
    ]
    // .. other properties..
  },
]
```

The juice of this part is in the `resultsConfig` for the virtual election (id=1). As
`agora-results` doesn't know the id of the subelections, it references to the
subelections by array index. The virtual election (Electoral Process, id 1) has
always array index 1. Then the sub-elections are indexed in the order of 
appeareance in the `virtualSubelections` property. Thus, within `agora-results`
the indexes of elections transform this way:

- Electoral Process #1 => Election Index 0
- Students Election #2 => Election Index 1
- Professors Election #3 => Election Index 2

We are using the `multipart_tally_plaintexts_append_joiner` pipe to source 
ballots from the subelections to the virtual election for results consolidation.

We could further improve the `Electoral Process #1` election results to contain 
there all the electoral information and not just consolidated elections. We could
clone twice Q1 and adjust the title of the cloned questions to do something 
like:

![Elections and Questions Improved](./assets/elections_and_questions_2.svg) 

The configuration file sketch would be:


```json title="university_elections_3.json"
[
  {
    "id": 1,
    "virtual": true,
    "virtualSubelections": [2,3],
    "resultsConfig": [
      [
        // We duplicate Q1 in election 0 (Electoral Process #1) into
        // question indexes 1 and 2 for students and professors, 
        // with empty ballots as votes will be sourced later with the 
        // multipart_tally_plaintexts_append_joiner pipe.
        "agora_results.pipes.duplicate_questions.duplicate_questions",
        {
          "duplications": [
            {
              "source_election_index": 0,
              "base_question_index": 0,
              "duplicated_question_indexes": [1,2],
              "zero_plaintexts": true
            }
          ]
        }
      ],

      [
        "agora_results.pipes.modifications.apply_modifications",
        {
          "modifications": [
            {
              "action": "set-title",
              "question_index": 0,
              "title": "Q1 all: Do you want John to be the University Dean?"
            },
            {
              "action": "set-title",
              "question_index": 1,
              "title": "Q1 students: Do you want John to be the University Dean?"
            },
            {
              "action": "set-title",
              "question_index": 2,
              "title": "Q1 professors: Do you want John to be the University Dean?"
            }
          ]
        }
      ],
      [
        // We source votes from source subelection questions to the
        // appropiate parent questions.
        "agora_results.pipes.multipart.multipart_tally_plaintexts_append_joiner",
        {
          "mappings": [
            {
              // From: Students Election #2 | Q1
              "source_election_id": 1,
              "source_question_num": 0,
              // To: Electoral Process #1 | Q1 all
              "dst_election_id": 0,
              "dst_question_num": 0
            },
            {
              // From: Students Election #2 | Q1
              "source_election_id": 1,
              "source_question_num": 0,
              // To: Electoral Process #1 | Q1 students
              "dst_election_id": 0,
              "dst_question_num": 1
            },
            {
              // From: Professors Election #3 | Q1
              "source_election_id": 2,
              "source_question_num": 0,
              // To: Electoral Process #1 | Q1 all
              "dst_election_id": 0,
              "dst_question_num": 0
            },
            {
              // From: Professors Election #3 | Q1
              "source_election_id": 2,
              "source_question_num": 0,
              // To: Electoral Process #1 | Q1 professors
              "dst_election_id": 0,
              "dst_question_num": 2
            },
            {
              // From: Students Election #2 | Q2
              "source_election_id": 1,
              "source_question_num": 1,
              // To: Electoral Process #1 | Q2
              "dst_election_id": 0,
              "dst_question_num": 3
            },
            {
              // From: Professors Election #3 | Q3
              "source_election_id": 2,
              "source_question_num": 1,
              // To: Electoral Process #1 | Q3
              "dst_election_id": 0,
              "dst_question_num": 4
            },
          ]
        }
      ]
      ["agora_results.pipes.results.do_tallies", {}],
      ["agora_results.pipes.sort.sort_non_iterative", {}]
    ]
    // .. other properties..
  },
  {
    "id": 2,
    "resultsConfig": [
      ["agora_results.pipes.results.do_tallies", {}],
      ["agora_results.pipes.sort.sort_non_iterative", {}]
    ]
    // .. other properties..
  },
  {
    "id": 3,
    "resultsConfig": [
      ["agora_results.pipes.results.do_tallies", {}],
      ["agora_results.pipes.sort.sort_non_iterative", {}]
    ]
    // .. other properties..
  },
]
```