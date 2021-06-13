---
layout: menu_page
title: Portfolio
permalink: /portfolio/
image: ../images/menu/photo_portfolio.jpg
---

<meta charset="UTF-8">

<img src="https://kozodoi.me/images/menu/photo_portfolio.jpg" style="width:0%; height:0%; top:0; bottom:0">

<div class="container">
  <div style="width:100%;height:0; padding-top:50%;position:relative;">
    <img src="../images/menu/photo_portfolio.jpg" style="width:100%; opacity:0.8; position:absolute; top:0; left:0">
  </div>  
  <div class="content">
    <h1>Portfolio</h1>
    <p><span class="cover-desc" style="color:var(--page-desc-color)">My portfolio includes three data science projects on different topics focusing on tabular data, computer vision and package development. To see more of my work, visit my <a href="https://github.com/kozodoi">GitHub</a> page or download my <a href="https://kozodoi.me/cv.pdf">CV</a>.</span></p>
  </div>
</div>

<p><span class="page-desc">My portfolio includes three data science projects on different topics focusing on tabular data, computer vision and package development. To see more of my work, visit my <a href="https://github.com/kozodoi">GitHub</a> page or download my <a href="https://kozodoi.me/cv.pdf">CV</a>.</span></p>

<script src="{{ base.url | prepend: site.url }}/assets/js/read_more.js"></script>

<hr style="height:1px; visibility:hidden;" />

<div style="font-size: 100%;">

  <p>My portfolio features the following projects:</p>

  <ul style="margin-top: -10px;">
  <li> &#128200; <a href="#PROJECT_1">Profit-driven demand forecasting with gradient boosting </a></li>
  <li> &#129516; <a href="#PROJECT_2">Image-to-text translation of chemical structures with deep learning </a></li>
  <li> &#128080; <a href="#PROJECT_3">Fairness: package for computing fair machine learning metrics </a></li>
  </ul>

</div>

<hr style="height:1px; visibility:hidden;" />

<a id="PROJECT_1"></a>

<div class="card">

<h2><b>Profit-driven demand forecasting with gradient boosting</b></h2>

<img src="https://kozodoi.me/images/portfolio/fig_custom_loss.png" alt="Notebook" style="width:100%">

<h3> Highlights </h3>
<ul>
<li> developed a two-stage demand forecasting pipeline with LightGBM models </li>
<li> performed a thorough cleaning, aggregation and feature engineering on transactional data </li>
<li> implemented custom loss functions aimed at maximizing the retailer's profit </li>
</ul>

<h3> Links </h3>
<ul>
<li> <a href="https://github.com/kozodoi/DMC_2020">GitHub repo</a> with code and documentation </li>
<li> <a href="https://kozodoi.me/python/time%20series/demand%20forecasting/competitions/2020/07/27/demand-forecasting.html">blog post</a> with the detailed project description </li>
</ul>

<span id="dots1"><p></p></span>
<span id="more1">
<h3> Summary </h3>

<p> Forecasting demand is an important managerial task that helps to optimize inventory planning. The optimized stocks can reduce retailer's costs and increase customer satisfaction due to faster delivery time. This project uses historical purchase data to predict future demand for different products. </p>

<p> The project pipeline includes several crucial steps:
<ul>
<li> thorough data preparation, cleaning and feature engineering </li>
<li> aggregation of transactional data into the daily format </li>
<li> implementation of custom profit-driven loss functions </li>
<li> two-stage demand forecasting with LightGBM models</li>
<li> hyper-parameter tuning with Bayesian algorithms </li>
<li> stacking ensemble to further maximize the performance </li>
</ul>
</p>

<p>A detailed walkthrough is provided in this <a href="https://kozodoi.me/python/time%20series/demand%20forecasting/competitions/2020/07/27/demand-forecasting.html">blog post</a>.</p>

</span>

<button class="btn" onclick="myFunction1()" id="myBtn1">Read more</button>

</div>





<br>

<a id="PROJECT_2"></a>

<div class="card">

<h2><b> Image-to-text translation of chemical structures with deep learning </b></h2>

<img src="https://kozodoi.me/images/portfolio/fig_inchi.jpg" alt="Notebook" style="width:100%">

<h3> Highlights </h3>
<ul>
<li> built CNN-LSTM encoder-decoder models to translate images into chemical formulas </li>
<li> developed a comprehensive PyTorch GPU/TPU image captioning pipeline </li>
<li> finished in the top-5% of the Kaggle competition leaderboard with silver medal </li>
</ul>

<h3> Links </h3>
<ul>
<li> <a href="https://github.com/kozodoi/BMS_Molecular_Translation">GitHub repo</a> with code and documentation </li>
<li> <a href="https://www.kaggle.com/c/bms-molecular-translation/discussion/243845">discussion topic</a> with the short summary </li>
</ul>

<span id="dots2"><p></p></span>
<span id="more2">
<h3> Summary </h3>

<p>Organic chemists frequently draw molecular work using structural graph notations. As a result, decades of scanned publications and medical documents contain drawings not annotated with chemical formulas. Time-consuming manual work of experts is required to reliably convert such images into machine-readable formulas. Automated recognition of optical chemical structures could speed up research and development in the field.</p>

<p>The goal of this project is to develop a deep learning based algorithm for chemical image captioning. In other words, the project aims at translating unlabeled chemical images into the text formula strings. To do that, I work with a large dataset of more than 4 million chemical images provided by Bristol-Myers Squibb.</p>

<p>My solution is an ensemble of CNN-LSTM Encoder-Decoder models implemented in PyTorch.The solution reaches the test score of 1.31 Levenstein Distance and places in the top-5% of the competition leaderboard. The code is documented and published on <a href="https://github.com/kozodoi/BMS_Molecular_Translation">GitHub</a>.</p>
</span>

<button class="btn" onclick="myFunction2()" id="myBtn2">Read more</button>

</div>






<br>

<a id="PROJECT_3"></a>

<div class="card">

<h2><b> <code>fairness</code>: Package for computing fair ML metrics </b></h2>

<img src="https://kozodoi.me/images/portfolio/fig_fairness.png" alt="Notebook" style="width:100%">

<h3> Highlights </h3>
<ul>
<li> developing and actively maintaining an R package for fair machine learning </li>
<li> the package offers calculation, visualization and comparison of algorithmic fairness metrics </li>
<li> the package is published on CRAN and has more than 11k total downloads </li>
</ul>

<h3> Links </h3>
<ul>
<li> <a href="https://github.com/kozodoi/fairness">GitHub repo</a> with code and documentation </li>
<li> <a href="https://kozodoi.me/r/fairness/packages/2020/05/01/fairness-tutorial.html">blog post</a> with the overview and tutorial </li>
</ul>

<span id="dots3"><p></p></span>
<span id="more3">
<h3> Summary </h3>
<p> How to measure fairness of a machine learning model? To date, a number of algorithmic fairness metrics have been proposed. Demographic parity, proportional parity and equalized odds are among the most commonly used metrics to evaluate group fairness in binary classification problems. </p>
<p> Together with Tibor V. Varga, we developed the <code>fairness</code> R package for fair machine learning. The package offers tools to calculate, visualize and compare commonly used metrics of algorithmic fairness across the sensitive groups. After publishing the package on CRAN in 2019, I have been actively working on maintaining the package and extending its functionality. The comprehensive overview of <code>fairness</code> is provided in this <a href="https://kozodoi.me/r/fairness/packages/2020/05/01/fairness-tutorial.html">blog post</a>.</p>
</span>

<button class="btn" onclick="myFunction3()" id="myBtn3">Read more</button>

</div>

<hr style="height:3pt; visibility:hidden;" />

Want to see more? Check out my recent <a href="https://kozodoi.me">blog posts</a>, <a href="https://kozodoi.me/kaggle/">competition solutions</a> and <a href="https://kozodoi.me/research/">academic publications</a>.
