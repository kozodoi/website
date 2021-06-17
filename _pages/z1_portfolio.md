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

  <p>Click "read more" to see project summaries and follow GitHub links for code and documentation.</p>

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

<p>The code and documentation are available <a href="https://github.com/kozodoi/DMC_2020">on GitHub</a>. A detailed walkthrough is provided in this <a href="https://kozodoi.me/python/time%20series/demand%20forecasting/competitions/2020/07/27/demand-forecasting.html">blog post</a>.</p>

</span>

<button class="btn" onclick="myFunction1()" id="myBtn1">Read more</button>
<button class="btn" onclick="window.open('https://github.com/kozodoi/DMC_2020')" type="button">GitHub repo</button>
<button class="btn" onclick="window.open('https://kozodoi.me/python/time%20series/demand%20forecasting/competitions/2020/07/27/demand-forecasting.html')" type="button">Blog post</button>
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

<span id="dots2"><p></p></span>
<span id="more2">
<h3> Summary </h3>

<p>Organic chemists frequently draw molecular work using structural graph notations. As a result, decades of scanned publications and medical documents contain drawings not annotated with chemical formulas. Time-consuming manual work of experts is required to reliably convert such images into machine-readable formulas. Automated recognition of optical chemical structures could speed up research and development in the field.</p>

<p>The goal of this project is to develop a deep learning based algorithm for chemical image captioning. In other words, the project aims at translating unlabeled chemical images into the text formula strings. To do that, I work with a large dataset of more than 4 million chemical images provided by Bristol-Myers Squibb.</p>

<p>My solution is an ensemble of CNN-LSTM Encoder-Decoder models implemented in PyTorch.The solution reaches the test score of 1.31 Levenstein Distance and places in the top-5% of the competition leaderboard. The code is documented and published on <a href="https://github.com/kozodoi/BMS_Molecular_Translation">GitHub</a>.</p>
</span>

<button class="btn" onclick="myFunction2()" id="myBtn2">Read more</button>
<button class="btn" onclick="window.open('https://github.com/kozodoi/BMS_Molecular_Translation')" type="button">GitHub repo</button>
<button class="btn" onclick="window.open('https://www.kaggle.com/c/bms-molecular-translation/discussion/243845')" type="button">Writeup on Kaggle</button>

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

<span id="dots3"><p></p></span>
<span id="more3">
<h3> Summary </h3>
<p> How to measure fairness of a machine learning model? To date, a number of algorithmic fairness metrics have been proposed. Demographic parity, proportional parity and equalized odds are among the most commonly used metrics to evaluate group fairness in binary classification problems. </p>
<p> Together with Tibor V. Varga, we developed the <code>fairness</code> R package for fair machine learning. The package offers tools to calculate, visualize and compare commonly used metrics of algorithmic fairness across the sensitive groups. After publishing the package on CRAN in 2019, I have been actively working on maintaining the package and extending its functionality. The comprehensive overview of <code>fairness</code> is provided in this <a href="https://kozodoi.me/r/fairness/packages/2020/05/01/fairness-tutorial.html">blog post</a>.</p>
</span>

<button class="btn" onclick="myFunction3()" id="myBtn3">Read more</button>
<button class="btn" onclick="window.open('https://github.com/kozodoi/fairness')" type="button">GitHub repo</button>
<button class="btn" onclick="window.open('https://kozodoi.me/r/fairness/packages/2020/05/01/fairness-tutorial.html')" type="button">Blog post</button>

</div>

<hr style="height:3pt; visibility:hidden;" />
<hr style="height:3pt; visibility:hidden;" />



Want to see more? Check out some of my further ML projects below. You can also visit my <a href="https://github.com/kozodoi">GitHub page</a> and see my recent <a href="https://kozodoi.me">blog posts</a>, <a href="https://kozodoi.me/kaggle/">competition solutions</a> and <a href="https://kozodoi.me/research/">academic publications</a>.

<h2> Computer vision </h2>

<div class="card">

<h3>Catheter and tube position detection with deep learning</h3>

<span id="dots4"><p></p></span>
<span id="more4" style="display:none;">

<img src="https://i.postimg.cc/tT6b3KGN/xray-sample.png" alt="Notebook" style="width:100%">

<h3> Highlights </h3>
<ul>
<li> built deep learning models to detect catheter and tube position on X-ray images </li>
<li> developed a comprehensive PyTorch GPU/TPU computer vision pipeline </li>
<li> finished in the top-5% of the Kaggle competition leaderboard with silver medal </li>
</ul>

<h3> Summary </h3>
<p> Hospital patients can have catheters and tubes inserted during their admission. If tubes are placed incorrectly, serious health complications can occur later. Deep learning helps to automate detection of malpositioned tubes, which allows to reduce the workload of clinicians and prevent treatment delays. </p>
<p> This project works with a dataset of 30,083 high-resolution chest X-ray images. The images have 11 binary labels indicating normal, borderline or abnormal placement of endotracheal tubes, nasogastric tubes, central venous catheters and Swan-Ganz catheters. </p>
<p> Within the project, I develop a comprehensive GPU/TPU image processing and modeling pipeline written in PyTorch. The solution builds an ensemble of seven CNN models that reaches the test mean AUC of 0.971 and places in the top-5% among the 1,549 competing teams. The code is documented and published on <a href="https://github.com/kozodoi/Kaggle_RANZCR_Challenge">GitHub</a>. </p>
</span>

<button class="btn" onclick="myFunc4()" id="myBtn4">Read more</button>
<button class="btn" onclick="window.open('https://github.com/kozodoi/Kaggle_RANZCR_Challenge')" type="button">GitHub repo</button>
<button class="btn" onclick="window.open('https://www.kaggle.com/c/ranzcr-clip-catheter-line-classification/discussion/226664')" type="button">Writeup on Kaggle</button>

</div>

<hr style="height:3pt; visibility:hidden;" />

<div class="card">

<h3>Detecting blindness on retina photos</h3>

<span id="dots5"><p></p></span>
<span id="more5" style="display:none;">

<img src="https://i.postimg.cc/dVjwCDr2/blindness.png" alt="Notebook" style="width:100%">

<h3> Highlights </h3>
<ul>
<li> developed CNN models to identify disease types from retina photos </li>
<li> written a detailed report covering problem statement, EDA and modeling </li>
<li> submitted as a capstone project within the Udacity ML Engineer program </li>
</ul>

<h3> Summary </h3>
<p>Diabetic retinopathy (DR) is one of the leading causes of vision loss. Early detection and treatment are crucial steps towards preventing DR. This project considers DR detection as an ordinal classification task and aims at developing a deep learning model for predicting the severity of DR disease based on the patient's retina photograph.</p>
<p>The project has been completed within the scope of <a href="https://confirm.udacity.com/LMMJDA7C">Udacity ML Engineer Nanodegree</a> program. I use data employed in the <a href="https://www.kaggle.com/c/aptos2019-blindness-detection/data">APTOS 2019 Blindness Detection competition</a> on Kaggle.</p>
</span>

<button class="btn" onclick="myFunc5()" id="myBtn5">Read more</button>
<button class="btn" onclick="window.open('https://github.com/kozodoi/Udacity_Blindness_Detection')" type="button">GitHub repo</button>
<button class="btn" onclick="window.open('https://kozodoi.me/python/deep%20learning/computer%20vision/competitions/2020/07/11/blindness-detection.html')" type="button">Blog post</button>
<button class="btn" onclick="window.open('https://github.com/kozodoi/Udacity_Blindness_Detection/raw/master/report.pdf')" type="button">Detailed report</button>

</div>




<hr style="height:3pt; visibility:hidden;" />



<h2> Tabular data </h2>

<div class="card">

<h3>Google analytics customer revenue prediction</h3>

<span id="dots6"><p></p></span>
<span id="more6" style="display:none;">

<img src="https://i.postimg.cc/6QKFDSwb/var-importance.png" alt="Notebook" style="width:100%">

<h3> Highlights </h3>
<ul>
<li> worked with two-year transactional data from an e-commerce store </li>
<li> developed LightGBM models to predict future revenues generated by customers </li>
<li> finished in the top-2% of the Kaggle competition leaderboard with silver medal </li>
</ul>

<h3> Summary </h3>
<p>Predicting future revenues generated by a certain customer is an important e-commerce task. Revenue forecasts are frequently used by marketing departments to refine the targeting and promotional strategies. Machine learning can help to produce accurate predictions for existing customers.</p>
<p>This project works with a two-year data set with user transactions in the Google Merchandise Store. We perform a thorough data preprocessing and aggregation, engineering features such as recency, frequency and page visit statistics. We build an ensemble of LightGBM models to predict future revenues generated by the existing Google customers. Our solution reaches 0.886 on the public LB, placing in the top-2% of the corresponding Kaggle competition.</p>
</span>

<button class="btn" onclick="myFunc6()" id="myBtn6">Read more</button>
<button class="btn" onclick="window.open('https://github.com/kozodoi/Kaggle_Google_Analytics')" type="button">GitHub repo</button>

</div>

<hr style="height:3pt; visibility:hidden;" />
