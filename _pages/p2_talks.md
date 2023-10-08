---
layout: menu_page
title: Talks
permalink: /talks/
---

<script src="{{ base.url | prepend: site.url }}/assets/js/show_abstract.js"></script>

<div class="container">
  <div style="width:100%;height:0; padding-top:50%;position:relative;">
    <img src="../images/menu/photo_talks.jpg" style="width:100%; opacity:0.8; position:absolute; top:0; left:0">
  </div>  
  <div class="content">
    <h1>Talks</h1>
    <p><span class="cover-desc" style="color:var(--page-desc-color)">I regularly give talks on ML topics at academic conferences, AI meetups and other events. Below, you can find links to videos and slides of selected talks.</span></p>
  </div>
</div>

<p><span class="page-desc">I regularly give talks on ML topics at academic conferences, AI meetups and other events. Below, you can find links to videos and slides of selected talks.</span></p>


<!----------------------------------------------------------------------------->

<hr style="height:1px; visibility:hidden;" />

<div style="font-size: 100%;">

  <p>This page overviews my public talks including:</p>

  <ul style="margin-top: -10px;">
  <li> &#128483; <a href="#PART_1">Talks at AI meetups </a></li>
  <li> &#128218; <a href="#PART_2">Talks at ML conferences </a></li>
  <li> &#127891; <a href="#PART_3">Teaching-related talks </a></li>
  </ul>

</div>


<!----------------------------------------------------------------------------->

<hr style="height:1px; visibility:hidden;" />
<hr style="height:1px;border-width:0;color:rgb(50,50,50);background-color:rgb(50,50,50)">

<a id="PART_1"></a>

## Meetups

<ul>
    <li>
    <b>Detecting AI-Generated Texts</b>
    <dd><bb>Generative AI on AWS, 2023 (San Fancisco)</bb></dd>
    </li>
</ul>
<ul class="no-bullets">
  <span id="dots8"></span>
  <li><span id="abs8"><p></p><b>Abstract:</b> Large language models excel in generating realistic text, which emphasizes the need for systems that detect whether a text is generated or written by a human. Detecting generated text is crucial in many applications such as identifying fake news, filtering product reviews, and assessing student assignments. In this talk, I will discuss typical differences between generated and human text, and overview the prominent state-of-the-art text detection approaches, including watermarking, supervised and zero-shot methods. We will also touch on limitations of the existing detectors and discuss emerging approaches to evade them. </span></li>
  <li>
    <button class="btn" onclick="show_abstract(dots_id = 'dots8', abs_id = 'abs8', btn_id = 'b8')" id="b8">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://youtu.be/96c5nurHRok?si=sbVXJE06rN5LIv0U&t=2040')" type="button">&#128249; Video</button>
  </li>
</ul>
<p></p>

<ul>
    <li>
    <b>Lesson for Industry from Kaggle Competitions</b>
    <dd><bb>Street Smart AI, 2023 (Berlin)</bb></dd>
    </li>
</ul>
<ul class="no-bullets">
  <span id="dots7"></span>
  <li><span id="abs7"><p></p><b>Abstract:</b> Kaggle is an online platform that hosts large-scale ML competitions. In this talk, I discuss lessons and best practices used by data scientists who compete on Kaggle and other platforms. I will cover lessons and insights that are useful in the industry and can be leveraged in various ML projects.</span></li>
  <li>
    <button class="btn" onclick="show_abstract(dots_id = 'dots7', abs_id = 'abs7', btn_id = 'b7')" id="b7">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/Kaggle_2023.pdf')" type="button">&#128202; Slides</button>
    <button class="btn" onclick="window.open('https://youtu.be/LtLCR3X5gBM')" type="button">&#128249; Video</button>
  </li>
</ul>
<p></p>

<ul>
    <li>
    <b>Fighting Sampling Bias in ML Models in Credit Scoring</b>
    <dd><bb>Solving Real World Problems via ML, 2021 (Berlin)</bb></dd>
    </li>
</ul>
<ul class="no-bullets">
  <span id="dots1"></span>
  <li><span id="abs1"><p></p><b>Abstract:</b> Machine learning is widely used to support decision-making in financial institutions. Credit scorecards are a prominent example. Such models are trained over the labeled data of previously accepted applicants, whose repayment behavior has been observed and ignore the rejected applicants. This creates sampling bias: the training data represent a limited region of the distribution on which the model is deployed for screening new customers. In this talk, I will illustrate the adverse impact of sampling bias on training and evaluation of scoring models. I will also overview possible methods to address this problem.</span></li>
  <li>
    <button class="btn" onclick="show_abstract(dots_id = 'dots1', abs_id = 'abs1', btn_id = 'b1')" id="b1">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/BMAM_2021.pdf')" type="button">&#128202; Slides</button>
    <button class="btn" onclick="window.open('https://youtu.be/S174yaYEifo')" type="button">&#128249; Video</button>
  </li>
</ul>
<p></p>


<!----------------------------------------------------------------------------->

<hr style="height:1px; visibility:hidden;" />
<hr style="height:1px;border-width:0;color:rgb(50,50,50);background-color:rgb(50,50,50)">

<a id="PART_2"></a>

## Conferences

<ul>
    <li>
    <b>Active Learning for Reject Inference in Credit Scoring</b>
    <dd><bb>Credit Scoring and Credit Control Conference, 2021 (Edinburgh)</bb></dd>
    </li>
</ul>
<ul class="no-bullets">
  <span id="dots2"></span>
  <li><span id="abs2"><p></p><b>Abstract:</b> Credit scoring models are trained on data of previously accepted credit applications, where the borrowers' repayment behavior has been observed. This creates sampling bias: the training data is not representative of the general population of borrowers. The sampling bias deteriorates the model's performance when the model is used to screen new applications. We use active learning (AL) to develop a dynamic bias correction framework. When screening incoming credit applications, AL algorithm identifies unlabeled cases (i.e., applications rejected by a scorecard) that should be labeled (i.e., granted a loan) based on the expected impact on the scoring model. Issuing a loan to risky customers incurs additional cost for the lender. At the same time, augmenting the training data with applications from the unexplored distribution regions reduces sampling bias and improves the scorecard’s performance on future credit applications. We perform an empirical study on synthetic and real-world credit scoring data to test the suggested AL-driven reject inference framework and investigate the trade-off between the labeling costs and performance gains. Preliminary results indicate that Al can improve scorecard performance and profitability.</span></li>
  <li>
    <button class="btn" onclick="show_abstract(dots_id = 'dots2', abs_id = 'abs2', btn_id = 'b2')" id="b2">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/CRC_2021.pdf')" type="button">&#128202; Slides</button>
    <button class="btn" onclick="window.open('https://youtu.be/sUM4B1YqkNk')" type="button">&#128249; Video</button>
  </li>
</ul>
<p></p>

<ul>
    <li>
    <b>Multi-Objective Particle Swarm Optimization for Feature Selection in Credit Scoring</b>
    <dd><bb>Workshop at European Conference on Machine Learning and PKDD, 2020 (Ghent)</bb></dd>
    </li>
</ul>
<ul class="no-bullets">
  <span id="dots3"></span>
  <li><span id="abs3"><p></p><b>Abstract:</b> Credit scoring refers to the use of statistical models to support loan approval decisions. An ever-increasing availability of data on potential borrowers emphasizes the importance of feature selection for scoring models. Traditionally, feature selection has been viewed as a single-objective task. Recent research demonstrates the effectiveness of multi-objective approaches. We propose a novel multi-objective feature selection framework for credit scoring that extends previous work by taking into account data acquisition costs and employing a state-of-the-art particle swarm optimization algorithm. Our framework optimizes three fitness functions: the number of features, data acquisition costs and the AUC. Experiments on nine credit scoring data sets demonstrate a highly competitive performance of the proposed framework.</span></li>
  <li>
    <button class="btn" onclick="show_abstract(dots_id = 'dots3', abs_id = 'abs3', btn_id = 'b3')" id="b3">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://arxiv.org/pdf/2103.01907.pdf')" type="button">&#128214; Paper</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/ECML_2020.pdf')" type="button">&#128202; Slides</button>
    <button class="btn" onclick="window.open('https://youtu.be/zxRsGcFNWf0')" type="button">&#128249; Video</button>
  </li>
</ul>
<p></p>

<ul>
    <li>
    <b>Shallow Self-Learning for Reject Inference in Credit Scoring</b>
    <dd><bb>European Conference on Machine Learning and PKDD, 2019 (Würzburg)</bb></dd>
    </li>
</ul>
<ul class="no-bullets">
  <span id="dots4"></span>
  <li><span id="abs4"><p></p><b>Abstract:</b> Credit scoring models support loan approval decisions in the financial services industry. Lenders train these models on data from previously granted credit applications, where the borrowers’ repayment behavior has been observed. This approach creates sample bias. The scoring model is trained on accepted cases only. Applying the model to screen applications from the population of all borrowers degrades its performance. Reject inference comprises techniques to overcome sampling bias through assigning labels to rejected cases. This paper makes two contributions. First, we propose a self-learning framework for reject inference. The framework is geared toward real-world credit scoring requirements through considering distinct training regimes for labeling and model training. Second, we introduce a new measure to assess the effectiveness of reject inference strategies. Our measure leverages domain knowledge to avoid artificial labeling of rejected cases during evaluation. We demonstrate this approach to offer a robust and operational assessment of reject inference. Experiments on a real-world credit scoring data set confirm the superiority of the suggested self-learning framework over previous reject inference strategies. We also find strong evidence in favor of the proposed evaluation measure assessing reject inference strategies more reliably, raising the performance of the eventual scoring model.</span></li>
  <li>
    <button class="btn" onclick="show_abstract(dots_id = 'dots4', abs_id = 'abs4', btn_id = 'b4')" id="b4">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://arxiv.org/pdf/1909.06108.pdf')" type="button">&#128214; Paper</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/ECML_2019.pdf')" type="button">&#128202; Slides</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/ECML_2019_poster.pdf')" type="button">&#129703; Poster</button>
  </li>
</ul>
<p></p>

<ul>
    <li>
    <b>Profit-Oriented Feature Selection in Credit Scoring Applications</b>
    <dd><bb>Conference on Operations Research, 2018 (Brussels)</bb></dd>
    </li>
</ul>
<ul class="no-bullets">
  <span id="dots5"></span>
  <li><span id="abs5"><p></p><b>Abstract:</b> In credit scoring, feature selection aims at removing irrelevant data to improve the performance of the scorecard and its interpretability. Standard feature selection techniques are based on statistical criteria such as correlation. Recent studies suggest that using profit-based indicators for model evaluation may improve the quality of scoring models for businesses. We extend the use of profit measures to feature selection and develop a wrapper-based framework that uses the Expected Maximum Profit measure (EMP) as a fitness function. Experiments on multiple credit scoring data sets provide evidence that EMP-maximizing feature selection helps to develop scorecards that yield a higher expected profit compared to conventional feature selection strategies.</span></li>
  <li>
    <button class="btn" onclick="show_abstract(dots_id = 'dots5', abs_id = 'abs5', btn_id = 'b5')" id="b5">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://www.researchgate.net/publication/335485098_Profit-Oriented_Feature_Selection_in_Credit_Scoring_Applications')" type="button">&#128214; Paper</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/OR_2018.pdf')" type="button">&#128202; Slides</button>
  </li>
</ul>
<p></p>



<!----------------------------------------------------------------------------->

<hr style="height:1px; visibility:hidden;" />
<hr style="height:1px;border-width:0;color:rgb(50,50,50);background-color:rgb(50,50,50)">

<a id="PART_3"></a>

## Teaching

<ul>
    <li>
    <b>Using Conda for Package and Environment Management</b>
    <dd><bb>Seminar on Applied Predictive Analytics at HU Berlin, 2021</bb></dd>
    </li>
</ul>
<ul class="no-bullets">
  <span id="dots6"></span>
  <li><span id="abs6"><p></p><b>Abstract:</b> The talk provides a brief practical-driven introduction into using Conda for package and environment management in Python-based data science projects. The talks covers the basics of package and environment management and provides a tutorial on the basic Conda functionality.</span></li>
  <li>
    <button class="btn" onclick="show_abstract(dots_id = 'dots6', abs_id = 'abs6', btn_id = 'b6')" id="b6">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/APA_2021.pdf')" type="button">&#128202; Slides</button>
    <button class="btn" onclick="window.open('https://youtu.be/jraqbUMc4EU')" type="button">&#128249; Video</button>
  </li>
</ul>
<p></p>

<ul>
  <li>
    <a href="https://kozodoi.me/teaching/">Click here</a> to read more about my teaching experience at HU Berlin
  </li>
</ul>