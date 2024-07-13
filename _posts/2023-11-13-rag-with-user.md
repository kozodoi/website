---
description: Improve LLM responses in RAG use cases by interacting with the user
title: RAG with User Interaction
toc: true
badges: true
comments: true
author: Antonia Wiebeler, Nikita Kozodoi
categories: [generative ai, natural language processing, web app]
image: images/posts/rag.png
cover: images/covers/rag.png
layout: notebook
permalink: /blog/:year:month:day/rag-with-human-interaction
sticky_rank: 2
---

<p>This post is also published on the <a href="https://aws.amazon.com/blogs/machine-learning/improve-llm-responses-in-rag-use-cases-by-interacting-with-the-user/">AWS ML Blog</a>. All opinions are my own.</p>

<h1 id="1.-Introduction">1. Introduction<a class="anchor-link" href="#1.-Introduction"> </a>
<p>One of the most common applications of generative AI and large language models (LLMs) is answering questions based on a specific external knowledge corpus. Retrieval-Augmented Generation (RAG) is a popular technique for building question answering systems that use an external knowledge base. To learn more, refer to Build a powerful question answering bot with Amazon SageMaker, Amazon OpenSearch Service, Streamlit, and LangChain.</p>
<p>Traditional RAG systems often struggle to provide satisfactory answers when users ask vague or ambiguous questions without providing sufficient context. This leads to unhelpful responses like “I don’t know” or incorrect, made-up answers provided by an LLM. In this post, we demonstrate a solution to improve the quality of answers in such use cases over traditional RAG systems by introducing an interactive clarification component using LangChain.</p>
<p>The key idea is to enable the RAG system to engage in a conversational dialogue with the user when the initial question is unclear. By asking clarifying questions, prompting the user for more details, and incorporating the new contextual information, the RAG system can gather the necessary context to provide an accurate, helpful answer—even from an ambiguous initial user query.</p>

<h1 id="2.-Full Post">2. Full Post<a class="anchor-link" href="#2.-Full Post"> </a>
<p>... <a href="https://aws.amazon.com/blogs/machine-learning/improve-llm-responses-in-rag-use-cases-by-interacting-with-the-user/"> (continue reading here)</a></p>