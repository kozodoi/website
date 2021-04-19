---
layout: menu_page
title: Portfolio
permalink: /portfolio/
---

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


<div class="card">

<h2><b>Profit-driven demand forecasting with gradient boosting</b></h2>

<img src="https://kozodoi.me/images/copied_from_nb/images/fig_custom_loss.png" alt="Notebook" style="width:100%">

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


<hr style="height:3pt; visibility:hidden;" />


<div class="card">

<h2><b> Catheter and line position detection with deep learning </b></h2>

<img src="https://camo.githubusercontent.com/3f09d23c36717d8fd0b82df60cc636cb146f022b2cbf7306db39721e9ed08acf/68747470733a2f2f692e706f7374696d672e63632f74543662334b474e2f787261792d73616d706c652e706e67" alt="Notebook" style="width:100%">

<h3> Highlights </h3>
<ul>
<li> built deep learning models to detect catheter and tube position on X-ray images </li>
<li> developed a comprehensive PyTorch GPU/TPU computer vision pipeline </li>
<li> finished in the top-5% of the Kaggle competition leaderboard with silver medal </li>
</ul>

<h3> Links </h3>
<ul>
<li> <a href="https://github.com/kozodoi/Kaggle_RANZCR_Challenge">GitHub repo</a> with code and documentation </li>
<li> <a href="https://www.kaggle.com/c/ranzcr-clip-catheter-line-classification/discussion/226664">discussion topic</a> with the short summary </li>
</ul>

<span id="dots2"><p></p></span>
<span id="more2">
<h3> Summary </h3>
<p> Hospital patients can have catheters and tubes inserted during their admission. If tubes are placed incorrectly, serious health complications can occur later. Deep learning helps to automate detection of malpositioned tubes, which allows to reduce the workload of clinicians and prevent treatment delays. </p>

<p> This project works with a dataset of 30,083 high-resolution chest X-ray images. The images have 11 binary labels indicating normal, borderline or abnormal placement of endotracheal tubes, nasogastric tubes, central venous catheters and Swan-Ganz catheters. </p>

<p> Within the project, I develop a comprehensive GPU/TPU image processing and modeling pipeline written in PyTorch. The solution builds an ensemble of seven CNN models that reaches the test mean AUC of 0.971 and places in the top-5% among the 1,549 competing teams. The code is documented and published on <a href="https://github.com/kozodoi/Kaggle_RANZCR_Challenge">GitHub</a>. </p>
</span>

<button class="btn" onclick="myFunction2()" id="myBtn2">Read more</button>

</div>


<hr style="height:3pt; visibility:hidden;" />


<div class="card">

<h2><b> <code>fairness</code>: Package for computing algorithmic fairness metrics </b></h2>

<img src="https://kozodoi.me/images/copied_from_nb/images/fair_cover.png" alt="Notebook" style="width:100%">

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

Want to see more? Check out my recent <a href="https://kozodoi.me">blog posts</a>, <a href="https://kozodoi.me/kaggle/">competition solutions</a> and <a href="https://kozodoi.me/publications/">academic publications</a>.
