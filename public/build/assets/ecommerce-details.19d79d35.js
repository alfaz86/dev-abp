$("input[name='demo1']").TouchSpin({min:0,max:100,step:1,boostat:5,maxboostedstep:1,buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary"});var e=new Splide("#main-slider",{type:"fade",heightRatio:.5,pagination:!1,arrows:!1,cover:!0,fixedHeight:556,direction:"rtl"}),t=new Splide("#thumbnail-slider",{rewind:!0,fixedWidth:104,fixedHeight:58,isNavigation:!0,gap:10,focus:"center",pagination:!1,cover:!0,direction:"rtl",dragMinThreshold:{mouse:4,touch:10},breakpoints:{640:{fixedWidth:66,fixedHeight:38}}});e.sync(t);e.mount();t.mount();var o=["#4361ee","#009688","#008eff","#7d30cb","#f8538d","#e2a03f","#1b2e4b"];document.querySelectorAll('.color-swatch input[name="flexRadioDefault"]').forEach((i,a,n)=>{i.style.backgroundColor=o[a]});GLightbox();