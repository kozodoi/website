---
layout: menu_page
title: Research
permalink: /research/
---

<script src="{{ base.url | prepend: site.url }}/assets/js/paper_description.js"></script>

<div class="container">
  <div style="width:100%;height:0; padding-top:50%;position:relative;">
    <img src="../images/menu/photo_publications.jpg" style="width:100%; opacity:0.8; position:absolute; top:0; left:0">
  </div>  
  <div class="content">
    <h1>Research</h1>
    <p><span class="cover-desc" style="color:var(--page-desc-color)">This page summarizes my research activities including publications in academic journals and conference proceedings. Check out my <a href="http://kozodoi.me/talks">public talks</a> or follow me on <a href="https://scholar.google.com/citations?hl=en&authuser=1&user=58tMuD0AAAAJ">Google Scholar</a> to see all of my work.</span></p>
  </div>
</div>

<p><span class="page-desc">This page summarizes my research activities including publications in academic journals and conference proceedings. Check out my <a href="http://kozodoi.me/talks">public talks</a> or follow me on <a href="https://scholar.google.com/citations?hl=en&authuser=1&user=58tMuD0AAAAJ">Google Scholar</a> to see all of my work.</span></p>


<!----------------------------------------------------------------------------->

<hr style="height:1px; visibility:hidden;" />

<div style="font-size: 100%;">

  <p>This page includes the following research-related activities:</p>

  <ul style="margin-top: -10px;">
  <li> &#128218; <a href="#PART_1">Selected list of my academic publications </a></li>
  <li> &#128221; <a href="#PART_2">List of outlets where I have been acting as a reviewer </a></li>
  <li> &#127979; <a href="#PART_3">My teaching activities at Humboldt University of Berlin </a></li>
  </ul>

</div>


<!----------------------------------------------------------------------------->

<hr style="height:1px; visibility:hidden;" />
<hr style="height:1px;border-width:0;color:rgb(50,50,50);background-color:rgb(50,50,50)">

<a id="PART_1"></a>

## Publications

### 2021

<ul>
  <li>
  Kozodoi, N., Jacob, J., & Lessmann, S. (2021).
  <dd><b>Fairness in Credit Scoring: Assessment, Implementation and Profit Implications.</b></dd>
  <dd>European Journal of Operational Research, 297, 1083-1094.</dd>
  </li>
</ul>
<ul class="no-bullets">
  <span id="dots1"></span>
  <li><span id="abs1"><p></p><b>Abstract:</b> The rise of algorithmic decision-making has spawned much research on fair machine learning (ML). Financial institutions use ML for building risk scorecards that support a range of credit-related decisions. Yet, the literature on fair ML in credit scoring is scarce. The paper makes three contributions. First, we revisit statistical fairness criteria and examine their adequacy for credit scoring. Second, we catalog algorithmic options for incorporating fairness goals in the ML model development pipeline. Last, we empirically compare different fairness processors in a profit-oriented credit scoring context using real-world data. The empirical results substantiate the evaluation of fairness measures, identify suitable options to implement fair credit scoring, and clarify the profit-fairness trade-off in lending decisions. We find that multiple fairness criteria can be approximately satisfied at once and recommend separation as a proper criterion for measuring the fairness of a scorecard. We also find fair in-processors to deliver a good balance between profit and fairness and show that algorithmic discrimination can be reduced to a reasonable level at a relatively low cost. The codes corresponding to the paper are available on GitHub.</span></li>
  <li>
    <button class="btn" onclick="paper_abstract_1()" id="b1">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://arxiv.org/pdf/2103.01907.pdf')" type="button">&#128214; PDF on arXiv</button>
    <button class="btn" onclick="window.open('https://doi.org/10.1016/j.ejor.2021.06.023')" type="button">&#128213; Published version</button>
    <button class="btn" onclick="window.open('https://github.com/kozodoi/Fair_Credit_Scoring')" type="button">&#128187; GitHub repo</button>
  </li>
</ul>
<p></p>


### 2020

<ul>
  <li>
  Kozodoi, N., Lessmann, S. (2020).
  <dd><b>Multi-Objective Particle Swarm Optimization for Feature Selection in Credit Scoring.</b></dd>
  <dd>In Workshop on Mining Data for Financial Applications at ECML PKDD 2020 (pp. 68-76). Springer, Cham.</dd>
  </li>
</ul>
<ul class="no-bullets">
  <span id="dots2"></span>
  <li><span id="abs2"><p></p><b>Abstract:</b> Credit scoring refers to the use of statistical models to support loan approval decisions. An ever-increasing availability of data on potential borrowers emphasizes the importance of feature selection for scoring models. Traditionally, feature selection has been viewed as a single-objective task. Recent research demonstrates the effectiveness of multi-objective approaches. We propose a novel multi-objective feature selection framework for credit scoring that extends previous work by taking into account data acquisition costs and employing a state-of-the-art particle swarm optimization algorithm. Our framework optimizes three fitness functions: the number of features, data acquisition costs and the AUC. Experiments on nine credit scoring data sets demonstrate a highly competitive performance of the proposed framework.</span></li>
  <li>
    <button class="btn" onclick="paper_abstract_2()" id="b2">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://www.researchgate.net/publication/348483079_Multi-objective_Particle_Swarm_Optimization_for_Feature_Selection_in_Credit_Scoring')" type="button">&#128214; PDF on ResearchGate</button>
    <button class="btn" onclick="window.open('https://link.springer.com/chapter/10.1007/978-3-030-66981-2_6')" type="button">&#128213; Published version</button>
  </li>
</ul>
<p></p>


<ul>
  <li>
  Kozodoi, N., Katsas, P., Lessmann, S., Moreira-Matias, L., & Papakonstantinou, K. (2020).
  <dd><b>Shallow Self-Learning for Reject Inference in Credit Scoring.</b></dd>
  <dd>In ECML PKDD 2019 Proceedings (pp. 516-532). Springer, Cham.</dd>
  </li>
</ul>
<ul class="no-bullets">
  <span id="dots3"></span>
  <li><span id="abs3"><p></p><b>Abstract:</b> Credit scoring models support loan approval decisions in the financial services industry. Lenders train these models on data from previously granted credit applications, where the borrowers’ repayment behavior has been observed. This approach creates sample bias. The scoring model is trained on accepted cases only. Applying the model to screen applications from the population of all borrowers degrades its performance. Reject inference comprises techniques to overcome sampling bias through assigning labels to rejected cases. This paper makes two contributions. First, we propose a self-learning framework for reject inference. The framework is geared toward real-world credit scoring requirements through considering distinct training regimes for labeling and model training. Second, we introduce a new measure to assess the effectiveness of reject inference strategies. Our measure leverages domain knowledge to avoid artificial labeling of rejected cases during evaluation. We demonstrate this approach to offer a robust and operational assessment of reject inference. Experiments on a real-world credit scoring data set confirm the superiority of the suggested self-learning framework over previous reject inference strategies. We also find strong evidence in favor of the proposed evaluation measure assessing reject inference strategies more reliably, raising the performance of the eventual scoring model.</span></li>
  <li>
    <button class="btn" onclick="paper_abstract_3()" id="b3">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://arxiv.org/pdf/1909.06108.pdf')" type="button">&#128214; PDF on arXiv</button>
    <button class="btn" onclick="window.open('https://link.springer.com/chapter/10.1007/978-3-030-46133-1_31')" type="button">&#128213; Published version</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/ECML_2019.pdf')" type="button">&#128202; Slides</button>
  </li>
</ul>
<p></p>


### 2019

<ul>
  <li>
  Kozodoi, N., Lessmann, S., Papakonstantinou, K., Gatsoulis, Y., & Baesens, B. (2019).
  <dd><b>A multi-objective approach for profit-driven feature selection in credit scoring.</b></dd>
  <dd>Decision Support Systems, 120, 106-117.</dd>
  </li>
</ul>
<ul class="no-bullets">
  <span id="dots4"></span>
  <li><span id="abs4"><p></p><b>Abstract:</b> In credit scoring, feature selection aims at removing irrelevant data to improve the performance of the scorecard and its interpretability. Standard techniques treat feature selection as a single-objective task and rely on statistical criteria such as correlation. Recent studies suggest that using profit-based indicators may improve the quality of scoring models for businesses. We extend the use of profit measures to feature selection and develop a multi-objective wrapper framework based on the NSGA-II genetic algorithm with two fitness functions: the Expected Maximum Profit (EMP) and the number of features. Experiments on multiple credit scoring data sets demonstrate that the proposed approach develops scorecards that can yield a higher expected profit using fewer features than conventional feature selection strategies.</span></li>
  <li>
    <button class="btn" onclick="paper_abstract_4()" id="b4">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://www.researchgate.net/publication/332215219_A_multi-objective_approach_for_profit-driven_feature_selection_in_credit_scoring')" type="button">&#128214; PDF on ResearchGate</button>
    <button class="btn" onclick="window.open('https://www.sciencedirect.com/science/article/abs/pii/S0167923619300570?via%3Dihub')" type="button">&#128213; Published version</button>
  </li>
</ul>
<p></p>


<ul>
  <li>
  Kozodoi, N., Lessmann, S., Baesens, B., & Papakonstantinou, K. (2019).
  <dd><b>Profit-Oriented Feature Selection in Credit Scoring Applications.</b></dd>
  <dd>In Operations Research 2018 Proceedings (pp. 59-65). Springer, Cham.</dd>
  </li>
</ul>
<ul class="no-bullets">
  <span id="dots5"></span>
  <li><span id="abs5"><p></p><b>Abstract:</b> In credit scoring, feature selection aims at removing irrelevant data to improve the performance of the scorecard and its interpretability. Standard feature selection techniques are based on statistical criteria such as correlation. Recent studies suggest that using profit-based indicators for model evaluation may improve the quality of scoring models for businesses. We extend the use of profit measures to feature selection and develop a wrapper-based framework that uses the Expected Maximum Profit measure (EMP) as a fitness function. Experiments on multiple credit scoring data sets provide evidence that EMP-maximizing feature selection helps to develop scorecards that yield a higher expected profit compared to conventional feature selection strategies.</span></li>
  <li>
    <button class="btn" onclick="paper_abstract_5()" id="b5">&#128220; Abstract</button>
    <button class="btn" onclick="window.open('https://www.researchgate.net/publication/335485098_Profit-Oriented_Feature_Selection_in_Credit_Scoring_Applications')" type="button">&#128214; PDF on ResearchGate</button>
    <button class="btn" onclick="window.open('https://link.springer.com/chapter/10.1007%2F978-3-030-18500-8_9')" type="button">&#128213; Published version</button>
    <button class="btn" onclick="window.open('https://kozodoi.me/talks/OR_2018.pdf')" type="button">&#128202; Slides</button>
  </li>
</ul>
<p></p>


### Citations

<iframe src="https://www.jung.ms/citations.php?id=58tMuD0AAAAJ&amp;lang=en" name="meiniframe" border="0" width="100%" frameborder="0" height="200" allowtransparency="false"></iframe>


<!----------------------------------------------------------------------------->

<hr style="height:1px; visibility:hidden;" />
<hr style="height:1px;border-width:0;color:rgb(50,50,50);background-color:rgb(50,50,50)">

<a id="PART_2"></a>

## Reviews

I have been acting as an expert reviewer at the following outlets:

- [European Journal of Operational Research](https://www.journals.elsevier.com/european-journal-of-operational-research)
- [Decision Support Systems](https://www.journals.elsevier.com/decision-support-systems)
- [International Journal of Forecasting](https://www.journals.elsevier.com/international-journal-of-forecasting)
- [Expert Systems with Applications](https://www.journals.elsevier.com/expert-systems-with-applications)
- [Business and Information Systems Engineering](https://www.springer.com/journal/12599)
- [Journal of Business Analytics](https://www.tandfonline.com/toc/tjba20/current)
- [Journal of the Royal Statistical Society](https://en.wikipedia.org/wiki/Journal_of_the_Royal_Statistical_Society)
- [The R Journal](https://journal.r-project.org)


<!----------------------------------------------------------------------------->

<hr style="height:1px; visibility:hidden;" />
<hr style="height:1px;border-width:0;color:rgb(50,50,50);background-color:rgb(50,50,50)">

<a id="PART_3"></a>

<div class="container">
  <div style="width:100%;height:0; padding-top:50%;position:relative;">
    <img src="../images/menu/photo_teaching.jpg" style="width:100%; opacity:0.8; position:absolute; top:0; left:0">
  </div>  
  <div class="content">
    <h1>Teaching</h1>
    <p><span class="cover-desc" style="color:var(--page-desc-color)">I act as a human teacher of machine learning at the <a href="https://www.wiwi.hu-berlin.de/en/Professorships/bwl/wi/personen-en/nikita-kozodoi-m-sc/nikita-kozodoi-m-sc">Chair of Information Systems</a> at HU Berlin. This includes teaching data science related courses and supervising M.Sc. dissertations on applied ML topics.</span></p>
  </div>
</div>

<p><span class="page-desc">I act as a human teacher of machine learning at the <a href="https://www.wiwi.hu-berlin.de/en/Professorships/bwl/wi/personen-en/nikita-kozodoi-m-sc/nikita-kozodoi-m-sc">Chair of Information Systems</a> at HU Berlin. This includes teaching data science related courses and supervising M.Sc. dissertations on applied ML topics.</span></p>

### Courses

#### Applied Predictive Analytics (M.Sc.)

- teaching ML infrastructure (conda, package management, git)
- supervising student's projects on applied ML topics in credit scoring

#### Advanced Data Analytics for Management Support (M.Sc.)

- hosting in-class Kaggle competition on NLP with deep learning
- answering students' questions in Q&A sessions and discussion forum

#### Business Analytics and Data Science (M.Sc.)

- preparing Python notebooks with machine learning exercises
- hosting tutorial coding sessions and preparing exam questions

<hr style="height:1px; visibility:hidden;" />
<hr style="height:1px;border-width:0;color:rgb(50,50,50);background-color:rgb(50,50,50)">

### Student dissertations

- A Cost-Benefit Analysis of Active Learning Methods in Credit Scoring
- Reject Inference using Generative Adversarial Neural Networks
- A Multi-Objective Particle Swarm Optimization Approach for Feature Selection
- Multi-Objective Feature Selection in Credit Scoring
