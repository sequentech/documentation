---
sidebar_position: 5
title: Segmented Mixing Guide
---

## Introduction and rationale

Segmented Mixing allows to speed up election creation and tallying for electoral
processes where you need regional tallies but the questions being voted are
exactly the same in all these tallies.

The alternative to segmented mixing is using
[Parent-Children Elections](../parent-and-children-elections/) with one child
election per region. However, since you need one election per region and 
elections are tallied sequentially and have a minimum tally (or key-creation)
time of around 30 seconds per question in each election, this can slow-down
the election creation and the tally time.

In contrast, with segmented mixing you only need one election. If you have 30
regions, one election with 2 questions and need a tally segmented by region,
then election creation and election tally will take only ~1 minute instead of 
30 minutes. 

:::note
[Parent-Children Elections](../parent-and-children-elections/) election is a 
more generic and powerful mechanism. Use Segmented mixing only when appropriate.
:::

Fast segmented mixing works by performing a single mix while allowing to
group/segment the resulting anonymized ballots because they have been tagged
before performing the tally. The encrypted ballots can be tagged by taking
advantage of the homomorphic properties of ElGamal, by which we can multiply an
encrypted ballot with another encrypted text of a specific number different for
each group (the tag) and obtain a verifiably encrypted text that contains the
result of that multiplication.

## How does it work?

The way segmented mixing works is that:
1. Each voter has an attribute in the census marking its region.
2. Before sending the encrypted ballots to the mixnet, they are tagged with a 
   different tag per region.
3. Once the votes are shuffled and decrypted by the mixnet, the raw encoded
   ballots are decoded and converted into
   `(encoded-ballot) -> (region, original-ballot)`.
4. The ballots are tallied grouped per region and also showing a consolidated
   result.

## 