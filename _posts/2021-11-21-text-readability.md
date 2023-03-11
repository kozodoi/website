---
description: ML solution and web app for predicting reading complexity of your texts
title: Estimating Text Readability with Transformers
toc: true
badges: true
comments: true
author: Nikita Kozodoi
categories: [deep learning, natural language processing, web app]
image: images/posts/readability.png
cover: images/portfolio/fig_books.jpg
layout: notebook
---

<div class="cell border-box-sizing text_cell rendered">
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="1.-Overview">1. Overview<a class="anchor-link" href="#1.-Overview"> </a></h1>

<p>Estimating text complexity and readability is a crucial task for teachers. Offering students text passages at the right level of challenge is important for facilitating a fast development of reading skills. The existing tools to estimate readability rely on weak proxies and heuristics. Deep learning may help to improve the accuracy of the used text complexity scores.</p>
<p>This blog post overviews <a href="https://kozodoi-text-readability-prediction-web-app-ddrfmw.streamlit.app">an interactive web app</a> that estimates reading complexity of a custom text with deep learning. The app relies on transformer models that are part of my top-9% solution to the <a href="https://www.kaggle.com/c/commonlitreadabilityprize">CommonLit Readability Prize</a> Kaggle competition. The app is built in Python and deployed in Streamlit. The blog post provides a demo of the app and includes a summary of the modeling pipeline and the app implementation. </p>
</div>
</div>
</div>

<div class="cell border-box-sizing text_cell rendered">
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="2.-App-demo">2. App demo<a class="anchor-link" href="#2.-App-demo"></a></h1>
<p>You can open the app by clicking on <a href="https://kozodoi-text-readability-prediction-web-app-ddrfmw.streamlit.app">this link</a>. Alternatively, just scroll down to see the app embedded in this blog post. If the embedded version does not load, please open the app <a href="https://kozodoi-text-readability-prediction-web-app-ddrfmw.streamlit.app">in a new tab</a>. Feel free to play around with the app by typing or pasting custom texts and estimating their complexity with different models! Scroll further down to read some details on the app and the underlying models.</p>
</div>
</div>
</div>

<iframe src="https://kozodoi-text-readability-prediction-web-app-ddrfmw.streamlit.app/?embed=true"
    	border="0"
        width="100%"
        frameborder="1"
        height="1200"
        allowtransparency="false">
</iframe>


<div class="cell border-box-sizing text_cell rendered">
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="3.-Implementation">3. Implementation<a class="anchor-link" href="#3.-Implementation"></a></h1>
<h2 id="3.1.-Modeling-pipeline">3.1. Modeling pipeline<a class="anchor-link" href="#3.1.-Modeling-pipeline"></a></h2>
<p>The app is developed in the scope of the <a href="https://www.kaggle.com/c/commonlitreadabilityprize">CommonLit Readability Prize</a> Kaggle competition on text complexity prediction. My solution is an ensemble of eight transformer models, including variants of BERT, RoBERTa and other architectures. All transformers are implemented in <code>PyTorch</code> and feature a custom regression head that uses a concatenated output of multiple hidden layers. </p>
<p>The project uses pre-trained transformer weights published on the <a href="https://huggingface.co/models">HuggingFace model hub</a>. Each model is then fine-tuned on a data set with 2834 text snippets, where readability of each snippet was evaluated by human experts. To avoid overfitting, fine-tuning relies on text augmentations such as sentence order shuffle, backtranslation and injecting target noise in the readability scores.</p>
<p>Each transformer model is fine-tuned using five-fold cross-validation repeated three times with different random splits. <a href="https://github.com/kozodoi/Text_Readability_Prediction">This GitHub repo</a> provides the source code and documentation for the modeling pipeline. The table below summarizes the main architecture and training parameters.</p>
<p><img src="https://i.postimg.cc/JnY0HdWQ/read-params.jpg" alt="Models"></p>
<p>The ensemble of eight transformer models places in the top-9% of the Kaggle competition leaderboard. The web app only includes two lightweight models from a single fold to ensure fast inference on CPU: DistilBERT and DistilRoBERTa.</p>


<h2 id="3.2.-App-implementation">3.2. App implementation<a class="anchor-link" href="#3.2.-App-implementation"></a></h2>
<p>The app is built in Python using the Streamlit library. Streamlit allows implementing a web app in a single Python code file and deploying the app to the cloud server so that anyone with the Internet access can check it out.</p>
<p>The app code is provided in <code>web_app.py</code> located in the root folder of the project <a href="https://github.com/kozodoi/Text_Readability_Prediction">GitHub repo</a>. The app is hosted on a virtual machine provided by Streamlit, which includes the list of dependencies specified in <code>requirements.txt</code>. It also imports some helper functions used within the modeling pipeline for text preprocessing and model initialization. </p>
<p>The app works by downloading weights of the selected transformer model to the virtual machine after a user selects which model to use for text readability prediction. The weights of each model are made available as <a href="https://github.com/kozodoi/Text_Readability_Prediction/releases/tag/0e96d53">release files</a> on GitHub. After downloading the weights, the app transforms the text entered by a user into the token sequence with the tokenizer that uses text processing settings specified in the model configuration file. Next, the app runs a single forward pass through the initialized transformer network and displays the output prediction.</p>
<p>The snippet below provides the app source code. The code imports relevant Python modules and configures the app page. Next, it provides functionality for entering the custom text and selecting the NLP model. Finally, the code includes the inference function and some further documentation. </p>

</div>
</div>
</div>
    {% raw %}

<div class="cell border-box-sizing code_cell rendered">
<details class="description" open>
      <summary class="btn btn-sm" data-open="Hide Code" data-close="Show Code"></summary>
        <p><div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#collapse-show</span>

<span class="c1">##### PREPARATIONS</span>

<span class="c1"># libraries</span>
<span class="kn">import</span> <span class="nn">gc</span>
<span class="kn">import</span> <span class="nn">os</span>
<span class="kn">import</span> <span class="nn">pickle</span>
<span class="kn">import</span> <span class="nn">sys</span>
<span class="kn">import</span> <span class="nn">urllib.request</span>
<span class="kn">import</span> <span class="nn">requests</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">streamlit</span> <span class="k">as</span> <span class="nn">st</span>
<span class="kn">from</span> <span class="nn">PIL</span> <span class="kn">import</span> <span class="n">Image</span>

<span class="c1"># custom libraries</span>
<span class="n">sys</span><span class="o">.</span><span class="n">path</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="s1">&#39;code&#39;</span><span class="p">)</span>
<span class="kn">from</span> <span class="nn">model</span> <span class="kn">import</span> <span class="n">get_model</span>
<span class="kn">from</span> <span class="nn">tokenizer</span> <span class="kn">import</span> <span class="n">get_tokenizer</span>

<span class="c1"># download with progress bar</span>
<span class="n">mybar</span> <span class="o">=</span> <span class="kc">None</span>
<span class="k">def</span> <span class="nf">show_progress</span><span class="p">(</span><span class="n">block_num</span><span class="p">,</span> <span class="n">block_size</span><span class="p">,</span> <span class="n">total_size</span><span class="p">):</span>
    <span class="k">global</span> <span class="n">mybar</span>
    <span class="k">if</span> <span class="n">mybar</span> <span class="ow">is</span> <span class="kc">None</span><span class="p">:</span>
        <span class="n">mybar</span> <span class="o">=</span> <span class="n">st</span><span class="o">.</span><span class="n">progress</span><span class="p">(</span><span class="mf">0.0</span><span class="p">)</span>
    <span class="n">downloaded</span> <span class="o">=</span> <span class="n">block_num</span> <span class="o">*</span> <span class="n">block_size</span> <span class="o">/</span> <span class="n">total_size</span>
    <span class="k">if</span> <span class="n">downloaded</span> <span class="o">&lt;=</span> <span class="mf">1.0</span><span class="p">:</span>
        <span class="n">mybar</span><span class="o">.</span><span class="n">progress</span><span class="p">(</span><span class="n">downloaded</span><span class="p">)</span>
    <span class="k">else</span><span class="p">:</span>
        <span class="n">mybar</span><span class="o">.</span><span class="n">progress</span><span class="p">(</span><span class="mf">1.0</span><span class="p">)</span>

<span class="c1"># page config</span>
<span class="n">st</span><span class="o">.</span><span class="n">set_page_config</span><span class="p">(</span><span class="n">page_title</span>            <span class="o">=</span> <span class="s2">&quot;Readability prediction&quot;</span><span class="p">,</span>
                   <span class="n">page_icon</span>             <span class="o">=</span> <span class="s2">&quot;:books:&quot;</span><span class="p">,</span>
                   <span class="n">layout</span>                <span class="o">=</span> <span class="s2">&quot;centered&quot;</span><span class="p">,</span>
                   <span class="n">initial_sidebar_state</span> <span class="o">=</span> <span class="s2">&quot;collapsed&quot;</span><span class="p">,</span>
                   <span class="n">menu_items</span>            <span class="o">=</span> <span class="kc">None</span><span class="p">)</span>


<span class="c1">##### HEADER</span>

<span class="c1"># title</span>
<span class="n">st</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">&#39;Text readability prediction&#39;</span><span class="p">)</span>

<span class="c1"># image cover</span>
<span class="n">image</span> <span class="o">=</span> <span class="n">Image</span><span class="o">.</span><span class="n">open</span><span class="p">(</span><span class="n">requests</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s1">&#39;https://i.postimg.cc/hv6yfMYz/cover-books.jpg&#39;</span><span class="p">,</span> <span class="n">stream</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span><span class="o">.</span><span class="n">raw</span><span class="p">)</span>
<span class="n">st</span><span class="o">.</span><span class="n">image</span><span class="p">(</span><span class="n">image</span><span class="p">)</span>

<span class="c1"># description</span>
<span class="n">st</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s1">&#39;This app uses deep learning to estimate the reading complexity of a custom text. Enter your text below, and we will run it through one of the two transfomer models and display the result.&#39;</span><span class="p">)</span>


<span class="c1">##### PARAMETERS</span>

<span class="c1"># title</span>
<span class="n">st</span><span class="o">.</span><span class="n">header</span><span class="p">(</span><span class="s1">&#39;How readable is your text?&#39;</span><span class="p">)</span>

<span class="c1"># model selection</span>
<span class="n">model_name</span> <span class="o">=</span> <span class="n">st</span><span class="o">.</span><span class="n">selectbox</span><span class="p">(</span>
    <span class="s1">&#39;Which model would you like to use?&#39;</span><span class="p">,</span>
     <span class="p">[</span><span class="s1">&#39;DistilBERT&#39;</span><span class="p">,</span> <span class="s1">&#39;DistilRoBERTa&#39;</span><span class="p">])</span>

<span class="c1"># input text</span>
<span class="n">input_text</span> <span class="o">=</span> <span class="n">st</span><span class="o">.</span><span class="n">text_area</span><span class="p">(</span><span class="s1">&#39;Which text would you like to rate?&#39;</span><span class="p">,</span> <span class="s1">&#39;Please enter the text in this field.&#39;</span><span class="p">)</span>


<span class="c1">##### MODELING</span>

<span class="c1"># compute readability</span>
<span class="k">if</span> <span class="n">st</span><span class="o">.</span><span class="n">button</span><span class="p">(</span><span class="s1">&#39;Compute readability&#39;</span><span class="p">):</span>

    <span class="c1"># specify paths</span>
    <span class="k">if</span> <span class="n">model_name</span> <span class="o">==</span> <span class="s1">&#39;DistilBERT&#39;</span><span class="p">:</span>
        <span class="n">folder_path</span> <span class="o">=</span> <span class="s1">&#39;output/v59/&#39;</span>
        <span class="n">weight_path</span> <span class="o">=</span> <span class="s1">&#39;https://github.com/kozodoi/Kaggle_Readability/releases/download/0e96d53/weights_v59.pth&#39;</span>
    <span class="k">elif</span> <span class="n">model_name</span> <span class="o">==</span> <span class="s1">&#39;DistilRoBERTa&#39;</span><span class="p">:</span>
        <span class="n">folder_path</span> <span class="o">=</span> <span class="s1">&#39;output/v47/&#39;</span>
        <span class="n">weight_path</span> <span class="o">=</span> <span class="s1">&#39;https://github.com/kozodoi/Kaggle_Readability/releases/download/0e96d53/weights_v47.pth&#39;</span>

    <span class="c1"># download model weights</span>
    <span class="k">if</span> <span class="ow">not</span> <span class="n">os</span><span class="o">.</span><span class="n">path</span><span class="o">.</span><span class="n">isfile</span><span class="p">(</span><span class="n">folder_path</span> <span class="o">+</span> <span class="s1">&#39;pytorch_model.bin&#39;</span><span class="p">):</span>
        <span class="k">with</span> <span class="n">st</span><span class="o">.</span><span class="n">spinner</span><span class="p">(</span><span class="s1">&#39;Downloading model weights. This is done once and can take a minute...&#39;</span><span class="p">):</span>
            <span class="n">urllib</span><span class="o">.</span><span class="n">request</span><span class="o">.</span><span class="n">urlretrieve</span><span class="p">(</span><span class="n">weight_path</span><span class="p">,</span> <span class="n">folder_path</span> <span class="o">+</span> <span class="s1">&#39;pytorch_model.bin&#39;</span><span class="p">,</span> <span class="n">show_progress</span><span class="p">)</span>

    <span class="c1"># compute predictions</span>
    <span class="k">with</span> <span class="n">st</span><span class="o">.</span><span class="n">spinner</span><span class="p">(</span><span class="s1">&#39;Computing prediction...&#39;</span><span class="p">):</span>

        <span class="c1"># clear memory</span>
        <span class="n">gc</span><span class="o">.</span><span class="n">collect</span><span class="p">()</span>

        <span class="c1"># load config</span>
        <span class="n">config</span> <span class="o">=</span> <span class="n">pickle</span><span class="o">.</span><span class="n">load</span><span class="p">(</span><span class="nb">open</span><span class="p">(</span><span class="n">folder_path</span> <span class="o">+</span> <span class="s1">&#39;configuration.pkl&#39;</span><span class="p">,</span> <span class="s1">&#39;rb&#39;</span><span class="p">))</span>
        <span class="n">config</span><span class="p">[</span><span class="s1">&#39;backbone&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">folder_path</span>

        <span class="c1"># initialize model</span>
        <span class="n">model</span> <span class="o">=</span> <span class="n">get_model</span><span class="p">(</span><span class="n">config</span><span class="p">,</span> <span class="n">name</span> <span class="o">=</span> <span class="n">model_name</span><span class="o">.</span><span class="n">lower</span><span class="p">(),</span> <span class="n">pretrained</span> <span class="o">=</span> <span class="n">folder_path</span> <span class="o">+</span> <span class="s1">&#39;pytorch_model.bin&#39;</span><span class="p">)</span>
        <span class="n">model</span><span class="o">.</span><span class="n">eval</span><span class="p">()</span>

        <span class="c1"># load tokenizer</span>
        <span class="n">tokenizer</span> <span class="o">=</span> <span class="n">get_tokenizer</span><span class="p">(</span><span class="n">config</span><span class="p">)</span>

        <span class="c1"># tokenize text</span>
        <span class="n">text</span> <span class="o">=</span> <span class="n">tokenizer</span><span class="p">(</span><span class="n">text</span>                  <span class="o">=</span> <span class="n">input_text</span><span class="p">,</span>
                         <span class="n">truncation</span>            <span class="o">=</span> <span class="kc">True</span><span class="p">,</span>
                         <span class="n">add_special_tokens</span>    <span class="o">=</span> <span class="kc">True</span><span class="p">,</span>
                         <span class="n">max_length</span>            <span class="o">=</span> <span class="n">config</span><span class="p">[</span><span class="s1">&#39;max_len&#39;</span><span class="p">],</span>
                         <span class="n">padding</span>               <span class="o">=</span> <span class="kc">False</span><span class="p">,</span>
                         <span class="n">return_token_type_ids</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span>
                         <span class="n">return_attention_mask</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span>
                         <span class="n">return_tensors</span>        <span class="o">=</span> <span class="s1">&#39;pt&#39;</span><span class="p">)</span>
        <span class="n">inputs</span><span class="p">,</span> <span class="n">masks</span><span class="p">,</span> <span class="n">token_type_ids</span> <span class="o">=</span> <span class="n">text</span><span class="p">[</span><span class="s1">&#39;input_ids&#39;</span><span class="p">],</span> <span class="n">text</span><span class="p">[</span><span class="s1">&#39;attention_mask&#39;</span><span class="p">],</span> <span class="n">text</span><span class="p">[</span><span class="s1">&#39;token_type_ids&#39;</span><span class="p">]</span>

        <span class="c1"># clear memory</span>
        <span class="k">del</span> <span class="n">tokenizer</span><span class="p">,</span> <span class="n">text</span><span class="p">,</span> <span class="n">config</span>
        <span class="n">gc</span><span class="o">.</span><span class="n">collect</span><span class="p">()</span>

        <span class="c1"># compute prediction</span>
        <span class="k">if</span> <span class="n">input_text</span> <span class="o">!=</span> <span class="s1">&#39;&#39;</span><span class="p">:</span>
            <span class="n">prediction</span> <span class="o">=</span> <span class="n">model</span><span class="p">(</span><span class="n">inputs</span><span class="p">,</span> <span class="n">masks</span><span class="p">,</span> <span class="n">token_type_ids</span><span class="p">)</span>
            <span class="n">prediction</span> <span class="o">=</span> <span class="n">prediction</span><span class="p">[</span><span class="s1">&#39;logits&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">detach</span><span class="p">()</span><span class="o">.</span><span class="n">numpy</span><span class="p">()[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span>
            <span class="n">prediction</span> <span class="o">=</span> <span class="mi">100</span> <span class="o">*</span> <span class="p">(</span><span class="n">prediction</span> <span class="o">+</span> <span class="mi">4</span><span class="p">)</span> <span class="o">/</span> <span class="mi">6</span> <span class="c1"># scale to [0,100]</span>

        <span class="c1"># clear memory</span>
        <span class="k">del</span> <span class="n">model</span><span class="p">,</span> <span class="n">inputs</span><span class="p">,</span> <span class="n">masks</span><span class="p">,</span> <span class="n">token_type_ids</span>
        <span class="n">gc</span><span class="o">.</span><span class="n">collect</span><span class="p">()</span>

        <span class="c1"># print output</span>
        <span class="n">st</span><span class="o">.</span><span class="n">metric</span><span class="p">(</span><span class="s1">&#39;Readability score:&#39;</span><span class="p">,</span> <span class="s1">&#39;</span><span class="si">{:.2f}</span><span class="s1">%&#39;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">prediction</span><span class="p">,</span> <span class="mi">2</span><span class="p">))</span>
        <span class="n">st</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s1">&#39;**Note:** readability scores are scaled to [0, 100%]. A higher score means that the text is easier to read.&#39;</span><span class="p">)</span>
        <span class="n">st</span><span class="o">.</span><span class="n">success</span><span class="p">(</span><span class="s1">&#39;Success! Thanks for scoring your text :)&#39;</span><span class="p">)</span>


<span class="c1">##### DOCUMENTATION</span>

<span class="c1"># header</span>
<span class="n">st</span><span class="o">.</span><span class="n">header</span><span class="p">(</span><span class="s1">&#39;More information&#39;</span><span class="p">)</span>

<span class="c1"># example texts</span>
<span class="k">with</span> <span class="n">st</span><span class="o">.</span><span class="n">expander</span><span class="p">(</span><span class="s1">&#39;Show example texts&#39;</span><span class="p">):</span>
    <span class="n">st</span><span class="o">.</span><span class="n">table</span><span class="p">(</span><span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">({</span>
        <span class="s1">&#39;Text&#39;</span><span class="p">:</span>  <span class="p">[</span><span class="s1">&#39;A dog sits on the floor. A cat sleeps on the sofa.&#39;</span><span class="p">,</span>  <span class="s1">&#39;This app does text readability prediction. How cool is that?&#39;</span><span class="p">,</span> <span class="s1">&#39;Training of deep bidirectional transformers for language understanding.&#39;</span><span class="p">],</span>
        <span class="s1">&#39;Score&#39;</span><span class="p">:</span> <span class="p">[</span><span class="mf">1.5571</span><span class="p">,</span> <span class="o">-</span><span class="mf">0.0100</span><span class="p">,</span> <span class="o">-</span><span class="mf">2.4025</span><span class="p">],</span>
    <span class="p">}))</span>

<span class="c1"># models</span>
<span class="k">with</span> <span class="n">st</span><span class="o">.</span><span class="n">expander</span><span class="p">(</span><span class="s1">&#39;Read about the models&#39;</span><span class="p">):</span>
    <span class="n">st</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s2">&quot;Both transformer models are part of my top-9</span><span class="si">% s</span><span class="s2">olution to the CommonLit Readability Kaggle competition. The pre-trained language models are fine-tuned on 2834 text snippets. [Click here](https://github.com/kozodoi/Kaggle_Readability) to see the source code and read more about the training pipeline.&quot;</span><span class="p">)</span>

<span class="c1"># metric</span>
<span class="k">with</span> <span class="n">st</span><span class="o">.</span><span class="n">expander</span><span class="p">(</span><span class="s1">&#39;Read about the metric&#39;</span><span class="p">):</span>
    <span class="n">st</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s2">&quot;The readability metric is calculated on the basis of a Bradley-Terry analysis of more than 111,000 pairwise comparisons between excerpts. Teachers spanning grades 3-12 (a majority teaching between grades 6-10) served as the raters for these comparisons. More details on the used reading complexity metric are available [here](https://www.kaggle.com/c/commonlitreadabilityprize/discussion/240886).&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>
</p>
    </details>
</div>
    {% endraw %}



<div class="cell border-box-sizing text_cell rendered">
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="4.-Closing-words">4. Closing words<a class="anchor-link" href="#4.-Closing-words"></a></h1>
<p>This blog post provided a demo of an interactive web app that uses deep learning to estimate text reading complexity. I hope you found the app interesting and enjoyed playing with it!</p>
<p>If you have any data science projects in your portfolio, I highly encourage you to try developing a similar app yourself. There are many things you could demonstrate, ranging from interactive EDA dashboards to inference calls to custom ML models. Streamlit makes this process very simple and allows hosting the app in the cloud. Happy learning!</p>
</div>
</div>
</div>
