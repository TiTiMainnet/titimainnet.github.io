(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[7308],{11523:(x,T,t)=>{"use strict";t.d(T,{o:()=>f});var h=t(17489),e=t(5e3),l=t(48966),n=t(39249);const i=["chart"];let f=(()=>{class d{constructor(a,v,u){this.dialog=a,this.ngZone=v,this.themeService=u,this.showTitle=!1}ngOnDestroy(){var a;null===(a=this.subTheme)||void 0===a||a.unsubscribe()}ngOnInit(){}ngAfterViewInit(){this.refreshChart()}ngOnChanges(a){this.refreshChart()}refreshChart(){var a;null===(a=this.subTheme)||void 0===a||a.unsubscribe(),this.subTheme=this.themeService.isDarkMode$.subscribe(v=>{this.option&&0!==Object.keys(this.option).length&&this.option.series&&this.option.series[0]&&0!==this.option.series[0].data.length&&t.e(8045).then(t.bind(t,28045)).then(u=>{this.ngZone.runOutsideAngular(()=>{this.echartsInstance||(this.echartsInstance=u.init(this.chartDivRef.nativeElement)),v?(this.option.title&&this.option.title.textStyle&&(this.option.title.textStyle.color="rgb(128, 255, 165)"),this.option.xAxis&&this.option.xAxis[0]&&this.option.xAxis[0].axisLine&&"pie"!=this.option.series[0].type&&(this.option.xAxis[0].axisLine.lineStyle=Object.assign(Object.assign({},this.option.xAxis[0].axisLine.lineStyle),{color:"rgba(128, 255, 255,0.6)"})),this.option.yAxis&&this.option.yAxis[0]&&this.option.yAxis[0].axisLine&&"pie"!=this.option.series[0].type&&(this.option.yAxis[0].axisLine.lineStyle=Object.assign(Object.assign({},this.option.yAxis[0].axisLine.lineStyle),{color:"rgba(128, 255, 255,0.6)"})),this.option.series&&this.option.series[0]&&"pie"!=this.option.series[0].type&&(this.option.series[0].lineStyle=Object.assign(Object.assign({},this.option.series[0].lineStyle),{color:"rgb(128, 255, 165)"}),this.option.series[0].markLine&&(this.option.series[0].markLine.lineStyle=Object.assign(Object.assign({},this.option.series[0].markLine.lineStyle),{color:"#01fef9"}),this.option.series[0].markLine.label=Object.assign(Object.assign({},this.option.series[0].markLine.label),{color:"#01fef9"})))):(this.option.title&&this.option.title.textStyle&&(this.option.title.textStyle.color="rgb(18,175,145)"),this.option.xAxis&&this.option.xAxis[0]&&this.option.xAxis[0].axisLine&&(this.option.xAxis[0].axisLine.lineStyle=Object.assign(Object.assign({},this.option.xAxis[0].axisLine.lineStyle),{color:"rgba(45,214,181,0.6)"})),this.option.yAxis&&this.option.yAxis[0]&&this.option.yAxis[0].axisLine&&(this.option.yAxis[0].axisLine.lineStyle=Object.assign(Object.assign({},this.option.yAxis[0].axisLine.lineStyle),{color:"rgba(45,214,181,0.6)"})),this.option.series&&this.option.series[0]&&"pie"!=this.option.series[0].type&&(this.option.series[0].lineStyle=Object.assign(Object.assign({},this.option.series[0].lineStyle),{color:"rgb(18,175,145)"}),this.option.series[0].markLine&&(this.option.series[0].markLine.lineStyle=Object.assign(Object.assign({},this.option.series[0].markLine.lineStyle),{color:"rgb(138,189,179)"}),this.option.series[0].markLine.label=Object.assign(Object.assign({},this.option.series[0].markLine.label),{color:"rgb(138,189,179)"}))));let c=Object.assign({},(0,h.cloneDeep)(this.option),{});c.yAxis&&c.yAxis[0]&&(c.yAxis[0].axisLabel={show:!1}),c.xAxis&&c.xAxis[0]&&(c.xAxis[0].axisLabel={show:!1}),c.title&&(c.title.show=this.showTitle,c.title.textStyle.fontSize=21,c.title.textStyle.fontWeight=500),this.echartsInstance.setOption(c),this.dialogRef&&this.dialogRef.componentInstance&&this.dialogRef.componentInstance.echartsInstance&&this.dialogRef.componentInstance.echartsInstance.setOption(this.option)})})})}showChartModal(){!this.option||Promise.all([t.e(8045),t.e(5532)]).then(t.bind(t,75532)).then(({ChartModalComponent:a})=>{this.dialogRef=this.dialog.open(a,{width:"80vw"}),this.dialogRef.componentInstance.option=this.option,this.dialogRef.afterClosed().subscribe()})}}return d.\u0275fac=function(a){return new(a||d)(e.Y36(l.uw),e.Y36(e.R0b),e.Y36(n.f))},d.\u0275cmp=e.Xpm({type:d,selectors:[["titi-chart-wrapper"]],viewQuery:function(a,v){if(1&a&&e.Gf(i,5),2&a){let u;e.iGM(u=e.CRH())&&(v.chartDivRef=u.first)}},inputs:{showTitle:"showTitle",option:"option"},features:[e.TTD],decls:4,vars:0,consts:[[2,"width","100%","height","100%","cursor","pointer","display","grid",3,"click"],["modal",""],[2,"width","100%","height","100%","min-height","150px"],["chart",""]],template:function(a,v){1&a&&(e.TgZ(0,"div",0,1),e.NdJ("click",function(){return v.showChartModal()}),e._UZ(2,"div",2,3),e.qZA())},styles:[""]}),d})()},45922:(x,T,t)=>{"use strict";t.d(T,{F:()=>n});var h=t(69808),p=t(48966),e=t(87841),l=t(5e3);let n=(()=>{class i{}return i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[[h.ez,p.Is,e.m]]}),i})()},57308:(x,T,t)=>{"use strict";t.r(T),t.d(T,{TitiModule:()=>L});var h=t(69808),p=t(71787),e=t(17489),l=t(28321),n=t(11730),i=t(5e3),f=t(65707),d=t(53405),D=t(74696),a=t(31657),v=t(92134),u=t(47423),c=t(11523),A=t(75303);const M=[{path:"",component:(()=>{class r{constructor(o,s,m,g,y){this.chainInfoService=o,this.graphService=s,this.echartService=m,this.web3Service=g,this.refreshService=y,this.totalStakedTiTi=0,this.totalTiTiSupply=0,this.titiDailyPrice=[0],this.TiUSDDailyPrice=[],this.option={}}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData())}ngOnDestroy(){this.unregister()}initData(){Promise.all([this.fetchTiUSDChartData(),this.fetchCurrentEpochInfo(),this.fetchTiTiTotalSupply(),this.fetchOptions()]).then(()=>this.buildOption())}buildOption(){this.option.series[0].data=this.titiDailyPrice,this.option=(0,e.cloneDeep)(this.option)}fetchOptions(){return this.echartService.fetchOption("TiTi-Price").then(o=>this.option=o)}fetchTiUSDChartData(){return this.graphService.fetchMMFSwapPairDailyData(this.chainInfoService.getChainConfig().contractAddressMap.MAMMSwapPair).then(({data:o})=>{var s;this.TiUSDDailyPrice=Array(30).fill(null);const m=(0,l.Gq)().reverse();null===(s=o.pair)||void 0===s||s.pairDailyData.forEach(y=>{const O=m.indexOf(1e3*y.dayStartTimestamp);-1!==O&&(this.TiUSDDailyPrice[O]=y.token0Price)});let g=1;return this.TiUSDDailyPrice.forEach((y,O)=>{null==y?this.TiUSDDailyPrice[O]=g:g=y}),this.fetchUniwapPairDailyData()})}fetchUniwapPairDailyData(){return Promise.all([this.graphService.fetchUniwapPairDailyData(),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[])]).then(([{data:o},s])=>{const m=this.chainInfoService.getChainConfig().isTiUSDToken0,g=Array(30).fill(null),y=(0,l.Gq)().reverse();0===o.uniswapPair.dailyData.length?g.fill(m?s[0]/s[1]:s[1]/s[0]):o.uniswapPair.dailyData.forEach(S=>{const P=y.indexOf(1e3*S.dayStartTimestamp);-1!==P&&(g[P]=0==S.fund0?0:m?S.fund0/S.fund1:S.fund1/S.fund0)});let O="0";g.forEach((S,P)=>{null==S?g[P]=O*this.TiUSDDailyPrice[P]:(g[P]=S*this.TiUSDDailyPrice[P],O=g[P])}),this.titiDailyPrice=g})}fetchCurrentEpochInfo(){return this.web3Service.invokeContract("TiTiBackendV1","epochNum",[]).then(o=>{this.fetchTiTiStakingInfoByEpoch(o[0])})}fetchTiTiStakingInfoByEpoch(o){return this.web3Service.invokeContract("TiTiStaking","totalTiTi",[]).then(s=>{this.totalStakedTiTi=s[0]/10**18})}fetchTiTiTotalSupply(){return Promise.all([this.web3Service.invokeContract("TiTiToken","totalSupply",[]),this.web3Service.invokeContract("TiTiToken","balanceOf",[this.chainInfoService.getChainConfig().contractAddressMap.MMFLPStakingPool]),this.web3Service.invokeContract("TiTiToken","balanceOf",[n.il]),this.web3Service.invokeContract("TiTiToken","balanceOf",[n.Lg]),this.web3Service.invokeContract("TiTiToken","balanceOf",[n.cr]),this.web3Service.invokeContract("TiTiToken","balanceOf",[n.Ew]),this.web3Service.invokeContract("TiTiToken","balanceOf",[n.xo]),this.web3Service.invokeContract("TiTiToken","balanceOf",[n.vl]),this.web3Service.invokeContract("TiTiToken","balanceOf",[n.Hg]),this.web3Service.invokeContract("TiTiToken","balanceOf",[n.wj]),...Object.keys(this.chainInfoService.getChainConfig().lpminingPools).map(o=>this.web3Service.invokeContract("TiTiToken","balanceOf",[o]))]).then(o=>{let s=o[0][0];for(let m=1;m<o.length;m++)s-=o[m][0];this.totalTiTiSupply=s/10**18})}}return r.\u0275fac=function(o){return new(o||r)(i.Y36(f.Z),i.Y36(d.h),i.Y36(D.p),i.Y36(n.Uc),i.Y36(a.g))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-titi"]],decls:26,vars:16,consts:[[1,"titi-wrapper"],[1,"mat-elevation-z4","biz-info-card"],[1,"title"],[3,"text"],[1,"value"],["target","_blank",1,"action-btn",3,"href"],["mat-raised-button","","color","primary",2,"width","100%"],["text","Proportion of staked TiTi in total circulation"],[1,"mat-elevation-z4","chart-wrapper"],[2,"width","100%","height","100%",3,"option","showTitle"]],template:function(o,s){1&o&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"h2",2),i._uU(3,"TiTi Price "),i._UZ(4,"titi-tooltip",3),i.qZA(),i.TgZ(5,"span",4),i._uU(6),i.ALo(7,"numberFormat"),i.qZA(),i.TgZ(8,"a",5),i.TgZ(9,"button",6),i._uU(10,"BUY"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(11,"div",1),i.TgZ(12,"h2",2),i._uU(13,"TiTi Circulation"),i.qZA(),i.TgZ(14,"span",4),i._uU(15),i.ALo(16,"numberFormat"),i.qZA(),i.qZA(),i.TgZ(17,"div",1),i.TgZ(18,"h2",2),i._uU(19,"Staked Ratio "),i._UZ(20,"titi-tooltip",7),i.qZA(),i.TgZ(21,"span",4),i._uU(22),i.ALo(23,"numberFormat"),i.qZA(),i.qZA(),i.TgZ(24,"div",8),i._UZ(25,"titi-chart-wrapper",9),i.qZA(),i.qZA()),2&o&&(i.xp6(4),i.Q6J("text","TiTi price calculated based on "+s.chainInfoService.getChainConfig().swapDexName+" and MAMM"),i.xp6(2),i.hij("$",i.xi3(7,7,s.titiDailyPrice[s.titiDailyPrice.length-1],4),""),i.xp6(2),i.Q6J("href",s.chainInfoService.getChainConfig().buyTiTiUrl,i.LSH),i.xp6(7),i.Oqu(i.xi3(16,10,s.totalTiTiSupply,4)),i.xp6(7),i.hij("",0===s.totalTiTiSupply?0:i.xi3(23,13,100*s.totalStakedTiTi/s.totalTiTiSupply,4),"%"),i.xp6(3),i.Q6J("option",s.option)("showTitle",!0))},directives:[v.Q,u.lW,c.o],pipes:[A.p],styles:[".titi-wrapper[_ngcontent-%COMP%]{padding:12px 24px 24px 12px;display:grid;grid-template-columns:2fr 2fr 2fr 2fr 2fr 2fr 0fr;align-items:center;grid-column-gap:24px;column-gap:24px;grid-row-gap:2rem;row-gap:2rem}.biz-info-card[_ngcontent-%COMP%]{min-height:80px;padding:18px;width:100%;grid-column-start:span 2;display:grid;grid-template-columns:1fr 1fr 1fr}.biz-info-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column-start:span 3;margin-left:48px;margin-bottom:20px}.biz-info-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{grid-column-start:span 2;align-self:end;font-size:18px;margin-left:48px;line-height:36px}.biz-info-card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{grid-column-start:span 1}.chart-wrapper[_ngcontent-%COMP%]{grid-column-start:span 6;align-self:start;justify-self:start;width:100%;padding:12px 18px;height:calc(100vh - 280px)}@media screen and (max-width: 1024px){.titi-wrapper[_ngcontent-%COMP%]{grid-template-columns:1fr;width:100%;padding:12px;grid-row-gap:1rem;row-gap:1rem}.biz-info-card[_ngcontent-%COMP%]{grid-column-start:span 1;padding:18px}.chart-wrapper[_ngcontent-%COMP%]{grid-column-start:span 1;padding:18px;height:auto}}"]}),r})()}];let b=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[[p.Bz.forChild(M)],p.Bz]}),r})();var E=t(45922),U=t(87841);let L=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[[h.ez,b,E.F,U.m,u.ot]]}),r})()},75303:(x,T,t)=>{"use strict";t.d(T,{p:()=>p});var h=t(5e3);let p=(()=>{class e{transform(n,i){const f=Math.pow(10,i);return(Math.floor(n*f)/f).toFixed(i)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=h.Yjl({name:"numberFormat",type:e,pure:!0}),e})()},74696:(x,T,t)=>{"use strict";t.d(T,{p:()=>l});var h=t(17489),e=t(5e3);let l=(()=>{class n{constructor(){}fetchOption(f){return t(45744)(`./${f}`).then(d=>(0,h.cloneDeep)(d.default))}}return n.\u0275fac=function(f){return new(f||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},45744:(x,T,t)=>{var h={"./LPMining-APY":[62790,8045,2790],"./LPMining-APY.ts":[62790,8045,2790],"./LPMining-Liquidity":[57238,8045,7238],"./LPMining-Liquidity.ts":[57238,8045,7238],"./MMF-APY":[95737,8045,5737],"./MMF-APY.ts":[95737,8045,5737],"./RainydayFund-Bar":[35201,5201],"./RainydayFund-Bar.ts":[35201,5201],"./RainydayFund-Pie":[16655,6655],"./RainydayFund-Pie.ts":[16655,6655],"./TiTi-Price":[73107,8045,3107],"./TiTi-Price.ts":[73107,8045,3107],"./TiTiStaking-APY":[33186,8045,3186],"./TiTiStaking-APY.ts":[33186,8045,3186],"./TiTiStaking-Ratio":[53297,8045,3297],"./TiTiStaking-Ratio.ts":[53297,8045,3297],"./TiUSD-Reserve-Bar":[78817,8817],"./TiUSD-Reserve-Bar.ts":[78817,8817],"./TiUSD-Reserve-Pie":[83706,3706],"./TiUSD-Reserve-Pie.ts":[83706,3706],"./TiUSD-TWAP":[34917,4917],"./TiUSD-TWAP.ts":[34917,4917],"./TiUSD-Trading-Pie":[45116,5116],"./TiUSD-Trading-Pie.ts":[45116,5116],"./TiUSDPrice":[53487,8045,3487],"./TiUSDPrice.ts":[53487,8045,3487]};function p(e){if(!t.o(h,e))return Promise.resolve().then(()=>{var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i});var l=h[e],n=l[0];return Promise.all(l.slice(1).map(t.e)).then(()=>t(n))}p.keys=()=>Object.keys(h),p.id=45744,x.exports=p}}]);