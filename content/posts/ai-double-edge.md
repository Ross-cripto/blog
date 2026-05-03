---
title: "AI, the Double-Edged Auditor"
date: "2026-05-03"
tag: "essay"
excerpt: "The same model that helps me find a bug helps someone else exploit it."
---

A model reads my code and tells me where it breaks. The same model, in different hands, reads someone else's code and tells them where to push.

This is not new in shape. Every powerful tool cuts both ways. What is new is the speed. A vulnerability that used to take a researcher a week of patient reading now takes an afternoon of prompts. The floor has moved. The person who could only write a SQL injection from a tutorial can now ask a model to chain three of them and explain the result.

I notice it in my own work. I paste a function and ask, *what could go wrong here?* — and the answer is often better than the review I would have written myself. Race conditions I would have missed. Auth checks that look fine and aren't. The model is patient in a way I am not at 11pm on a Friday.

That is the helpful edge. The other edge is that nothing about the question requires me to be the author of the code.

I do not think this is something to be alarmed about, exactly. The asymmetry already existed — attackers always had more time than defenders. What the model does is flatten the skill curve on both sides at once. The defender who never knew where to start now has a starting point. The attacker who never knew where to start has one too.

What changes, then, is what we owe the code. If the cost of finding a bug has dropped, the cost of leaving one in has risen by the same amount. The window between *shipped* and *exploited* is not measured in months anymore.

So I have started treating the model as the first reader of anything I write. Not because I trust it — I don't, fully — but because I know someone, somewhere, is already using it to read what I shipped last week.

Better that the first reading is mine.
