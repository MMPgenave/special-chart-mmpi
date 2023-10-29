const fValue = Number(
  document.querySelector(".special-chart-mmpi #F_value").innerHTML
);
const lValue = Number(
  document.querySelector(".special-chart-mmpi #L_value").innerHTML
);
const kValue = Number(
  document.querySelector(".special-chart-mmpi #K_value").innerHTML
);

const f_standard_Value = Number(
  document.querySelector(".special-chart-mmpi #F_standard").innerHTML
);
const l_standard_Value = Number(
  document.querySelector(".special-chart-mmpi #L_standard").innerHTML
);
const k_standard_Value = Number(
  document.querySelector(".special-chart-mmpi #K_standard").innerHTML
);

const red_Line1 = document.querySelector(".special-chart-mmpi #red_Line1");
const red_Line2 = document.querySelector(".special-chart-mmpi #red_Line2");
const blue_Line1 = document.querySelector(".special-chart-mmpi #blue_Line1");
const blue_Line2 = document.querySelector(".special-chart-mmpi #blue_Line2");

const red_ball1 = document.querySelector(".special-chart-mmpi #red_ball1");
const red_ball2 = document.querySelector(".special-chart-mmpi #red_ball2");
const red_ball3 = document.querySelector(".special-chart-mmpi #red_ball3");
const blue_ball1 = document.querySelector(".special-chart-mmpi #blue_ball1");
const blue_ball2 = document.querySelector(".special-chart-mmpi #blue_ball2");
const blue_ball3 = document.querySelector(".special-chart-mmpi #blue_ball3");


const f = (-234.4/70) * fValue + 234.4;
const l=(-234.4/70) * lValue + 234.4;
const k=(-234.4/70) * kValue + 234.4;
const fs = (-234.4/70) * f_standard_Value + 234.4;
const ls=(-234.4/70) * l_standard_Value + 234.4;
const ks=(-234.4/70) * k_standard_Value + 234.4;

red_Line1.y1.baseVal.value = f;
red_Line1.y2.baseVal.value = l;
red_Line2.y1.baseVal.value=l;
red_Line2.y2.baseVal.value=k;

blue_Line1.y1.baseVal.value = fs;
blue_Line1.y2.baseVal.value = ls;
blue_Line2.y1.baseVal.value=ls;
blue_Line2.y2.baseVal.value=ks;


red_ball3.style.top = f-2+'px';
red_ball2.style.top = l-2+'px';
red_ball1.style.top = k-2+'px';

blue_ball3.style.top = fs-2+'px';
blue_ball2.style.top = ls-2+'px';
blue_ball1.style.top = ks-2+'px';


