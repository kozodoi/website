---
description: Automated content generation and revision with LLMs
title: Medical Content Creation in the Age of Generative AI
toc: true
badges: true
comments: true
author: Sarah Boufelja Y., Liza Zinovyeva, Nikita Kozodoi et al.
categories: [generative ai, natural language processing, web app]
image: images/posts/content.png
cover: images/covers/content.png
layout: notebook
permalink: /blog/:year:month:day/medical-content-generation
sticky_rank: 1
---

<p>This post was originally published on the <a href="https://aws.amazon.com/blogs/machine-learning/medical-content-creation-in-the-age-of-generative-ai/">AWS ML Blog</a></p>

<h1 id="1.-Introduction">1. Introduction<a class="anchor-link" href="#1.-Introduction"> </a>
<p>Generative AI and transformer-based large language models (LLMs) have been in the top headlines recently. These models demonstrate impressive performance in question answering, text summarization, code, and text generation. Today, LLMs are being used in real settings by companies, including the heavily-regulated healthcare and life sciences industry (HCLS). The use cases can range from medical information extraction and clinical notes summarization to marketing content generation and medical-legal review automation (MLR process). In this post, we explore how LLMs can be used to design marketing content for disease awareness.</p>
<p>Marketing content is a key component in the communication strategy of HCLS companies.  It’s also a highly non-trivial balance exercise, because the technical content should be as accurate and precise as possible, yet engaging and empowering for the target audience. The main goal of the marketing content is to raise awareness about certain health conditions and disseminate knowledge of possible therapies among patients and healthcare providers. By accessing up-to-date and accurate information, healthcare providers can adapt their patients’ treatment in a more informed and knowledgeable way. However, medical content being highly sensitive, the generation process can be relatively slow (from days to weeks), and may go through numerous peer-review cycles, with thorough regulatory compliance and evaluation protocols.</p>
<p>Could LLMs, with their advanced text generation capabilities, help streamline this process by assisting brand managers and medical experts in their generation and review process?</p>
<p>To answer this question, the AWS Generative AI Innovation Center recently developed an AI assistant for medical content generation. The system is built upon Amazon Bedrock and leverages LLM capabilities to generate curated medical content for disease awareness. With this AI assistant, we can effectively reduce the overall generation time from weeks to hours, while giving the subject matter experts (SMEs) more control over the generation process. This is accomplished through an automated revision functionality, which allows the user to interact and send instructions and comments directly to the LLM via an interactive feedback loop. This is especially important since the revision of content is usually the main bottleneck in the process.</p>
<p>Since every piece of medical information can profoundly impact the well-being of patients, medical content generation comes with additional requirements and hinges upon the content’s accuracy and precision. For this reason, our system has been augmented with additional guardrails for fact-checking and rules evaluation. The goal of these modules is to assess the factuality of the generated text and its alignment with pre-specified rules and regulations. With these additional features, you have more transparency and control over the underlying generative logic of the LLM.</p>
<p>This post walks you through the implementation details and design choices, focusing primarily on the content generation and revision modules. Fact-checking and rules evaluation require special coverage and will be discussed in an upcoming post.</p>

<h1 id="2.-Full Post">2. Full Post<a class="anchor-link" href="#2.-Full Post"> </a>
<p>... <a href="https://aws.amazon.com/blogs/machine-learning/medical-content-creation-in-the-age-of-generative-ai/"> (continue reading here)</a></p>