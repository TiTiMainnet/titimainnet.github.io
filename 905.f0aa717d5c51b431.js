"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[905],{13905:(X,m,r)=>{r.r(m),r.d(m,{Use2earnModule:()=>E});var g=r(69808),u=r(71787),T=r(98538),c=r.n(T),p=r(48634),e=r(5e3),f=r(32681),C=r(31657),U=r(48966),v=r(11730),w=r(57610),b=r(92134),h=r(47423),o=r(32075),R=r(75303);function Z(t,i){1&t&&(e.TgZ(0,"th",20),e._uU(1,"Act."),e.qZA())}function y(t,i){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.Oqu(n.act)}}function S(t,i){1&t&&(e.TgZ(0,"th",22),e._uU(1,"Total Rewards"),e.qZA())}function _(t,i){if(1&t&&(e.TgZ(0,"td",23),e._uU(1),e.ALo(2,"numberFormat"),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij("",e.xi3(2,1,n.total,2)," TiTi")}}function x(t,i){1&t&&(e.TgZ(0,"th",22),e._uU(1,"Distributed Rewards"),e.qZA())}function D(t,i){if(1&t&&(e.TgZ(0,"td",23),e._uU(1),e.ALo(2,"numberFormat"),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij("",e.xi3(2,1,n.personal,2)," TiTi")}}function A(t,i){1&t&&(e.TgZ(0,"th",22),e._uU(1,"Expected Daily Rewards"),e.qZA())}function P(t,i){if(1&t&&(e.TgZ(0,"td",23),e._uU(1),e.ALo(2,"numberFormat"),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij("",e.xi3(2,1,n.rate,2)," TiTi/Day")}}function M(t,i){1&t&&e._UZ(0,"tr",24)}function O(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tr",25),e.NdJ("click",function(){const s=e.CHM(n).$implicit;return e.oxw().onRowClick(s)}),e.qZA()}}function Y(t,i){1&t&&(e.TgZ(0,"th",20),e._uU(1,"Act."),e.qZA())}function N(t,i){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.Oqu(n.act)}}function B(t,i){1&t&&(e.TgZ(0,"th",22),e._uU(1,"Total Rewards"),e.qZA())}function q(t,i){if(1&t&&(e.TgZ(0,"td",23),e._uU(1),e.ALo(2,"numberFormat"),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij("",e.xi3(2,1,n.total,2)," TiTi")}}function F(t,i){1&t&&(e.TgZ(0,"th",22),e._uU(1,"Distributed Rewards"),e.qZA())}function Q(t,i){if(1&t&&(e.TgZ(0,"td",23),e._uU(1),e.ALo(2,"numberFormat"),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij("",e.xi3(2,1,n.personal,2)," TiTi")}}function L(t,i){1&t&&(e.TgZ(0,"th",22),e._uU(1,"Expected Daily Rewards"),e.qZA())}function j(t,i){if(1&t&&(e.TgZ(0,"td",23),e._uU(1),e.ALo(2,"numberFormat"),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij("",e.xi3(2,1,n.rate,2)," TiTi/Day")}}function z(t,i){1&t&&e._UZ(0,"tr",24)}function J(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tr",25),e.NdJ("click",function(){const s=e.CHM(n).$implicit;return e.oxw().onRowClick(s)}),e.qZA()}}const k=[{path:"",component:(()=>{class t{constructor(n,a,l,s,d,I){this.router=n,this.use2earnService=a,this.refreshService=l,this.dialog=s,this.web3Service=d,this.accountService=I,this.isLoading=!1,this.displayedColumns=["act","total","personal","rate"],this.dataSource1=[],this.dataSource2=[],this.claimedRewards="0",this.totalClaimable="0",this.userDistributedReward=0,this.proof=[],this.totalDistributeReward=0,this.clickedRows=new Set}get claimableRewards(){let n=0;try{n=new(c())(this.totalClaimable).sub(new(c())(this.claimedRewards)).mul(new(c())("10000")).div(new(c())("10").pow(new(c())("18"))).toNumber()/1e4}catch(a){}return n<0?0:n}ngOnInit(){this.initData(),this.unregister=this.refreshService.registerFunction(()=>this.initData())}ngOnDestroy(){this.unregister()}initData(){this.fetchUserData().then(()=>this.buildDataSource()),this.fetchTotalDistributedReward().then(()=>this.fetchTreeData()).then(()=>this.fetchClaimedRewards())}fetchClaimedRewards(){return this.accountService.getCurrentAccountAsyn().then(n=>this.web3Service.invokeContract("TiTiMerkleDistributor","claimed",[n])).then(n=>{this.claimedRewards=n[0]})}fetchUserData(){return this.use2earnService.fetchUserData()}fetchTreeData(){return this.accountService.getCurrentAccountAsyn().then(n=>fetch(`https://api.titi.finance/use2earn/userData?address=${n}`).then(a=>a.json()).then(({latest_reward:l,proof:s,distributed_reward:d})=>{this.totalClaimable=l,this.userDistributedReward=parseFloat((0,p.formatUnits)(d,"18")),this.proof=s?JSON.parse(s):[]}))}fetchTotalDistributedReward(){return fetch("https://api.titi.finance/use2earn/totalDistributeReward").then(n=>n.json()).then(({totalDistributeReward:n})=>this.totalDistributeReward=parseFloat((0,p.formatUnits)(n,"18")))}buildDataSource(){this.dataSource1=[{act:"Buy TiUSD in MAMM",total:this.use2earnService.buyTiUSDReward,personal:this.use2earnService.buyTiUSDPersonalReward-this.use2earnService.buyTiUSDPersonalRewardRate>0?this.use2earnService.buyTiUSDPersonalReward-this.use2earnService.buyTiUSDPersonalRewardRate:0,rate:this.use2earnService.buyTiUSDPersonalRewardRate,url:"/use2earn/activity/buyTiUSD"},{act:"TiUSD Holder",total:this.use2earnService.holdTiUSDReward,personal:this.use2earnService.holdTiUSDPersonalReward,rate:this.use2earnService.holdTiUSDPersonalRewardRate,url:"/use2earn/activity/holdTiUSD"}],this.dataSource2=[{act:"Buy TiTi in Uniswap",total:this.use2earnService.buyTiTiReward,personal:this.use2earnService.buyTiTiPersonalReward-this.use2earnService.buyTiTiPersonalRewardRate,rate:this.use2earnService.buyTiTiPersonalRewardRate,url:"/use2earn/activity/buyTiTi"}]}onRowClick(n){this.router.navigateByUrl(n.url)}onClaim(){this.isLoading=!0,r.e(797).then(r.bind(r,51797)).then(({TitiStakingModalComponent:n})=>{this.dialog.open(n).afterClosed().subscribe(l=>this.accountService.getCurrentAccountAsyn().then(s=>this.web3Service.invokeContract("TiTiMerkleDistributor",l?"claimAndStake":"claim",[this.totalClaimable,this.proof])).then(()=>this.isLoading=!1,()=>this.isLoading=!1))})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.F0),e.Y36(f.Q),e.Y36(C.g),e.Y36(U.uw),e.Y36(v.Uc),e.Y36(w.B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-use2earn"]],decls:60,vars:20,consts:[[1,"use2earn-wrapper"],[1,"mat-elevation-z4","biz-info-card"],[1,"title"],["text","Accumulated TiTi Rewards distributed to use-to-earn behaviors."],[1,"value"],["text","Accural of unclaimable rewards in your account until the distribution is triggered."],["text","Accural of claimable rewards in your account at anytime."],["mat-raised-button","","color","primary",1,"action-btn",3,"disabled","click"],[1,"mat-elevation-z4","activity-table-wrapper"],["mat-table","",1,"activity-table",3,"dataSource"],["matColumnDef","act"],["mat-header-cell","","class"," left-align",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","total"],["mat-header-cell","","class"," right-align",4,"matHeaderCellDef"],["mat-cell","","class"," right-align",4,"matCellDef"],["matColumnDef","personal"],["matColumnDef","rate"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"left-align"],["mat-cell",""],["mat-header-cell","",1,"right-align"],["mat-cell","",1,"right-align"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h2",2),e._uU(3,"Distributed TiTi Rewards"),e._UZ(4,"titi-tooltip",3),e.qZA(),e.TgZ(5,"span",4),e._uU(6),e.ALo(7,"numberFormat"),e.qZA(),e.qZA(),e.TgZ(8,"div",1),e.TgZ(9,"h2",2),e._uU(10,"Your Distributed Rewards"),e._UZ(11,"titi-tooltip",5),e.qZA(),e.TgZ(12,"span",4),e._uU(13),e.ALo(14,"numberFormat"),e.qZA(),e.qZA(),e.TgZ(15,"div",1),e.TgZ(16,"h2",2),e._uU(17,"Your Claimable Rewards"),e._UZ(18,"titi-tooltip",6),e.qZA(),e.TgZ(19,"span",4),e._uU(20),e.ALo(21,"numberFormat"),e.qZA(),e.TgZ(22,"button",7),e.NdJ("click",function(){return a.onClaim()}),e._uU(23),e.qZA(),e.qZA(),e.TgZ(24,"div",8),e.TgZ(25,"h2"),e._uU(26,"Inter-Protocol Behaviors"),e.qZA(),e.TgZ(27,"table",9),e.ynx(28,10),e.YNc(29,Z,2,0,"th",11),e.YNc(30,y,2,1,"td",12),e.BQk(),e.ynx(31,13),e.YNc(32,S,2,0,"th",14),e.YNc(33,_,3,4,"td",15),e.BQk(),e.ynx(34,16),e.YNc(35,x,2,0,"th",14),e.YNc(36,D,3,4,"td",15),e.BQk(),e.ynx(37,17),e.YNc(38,A,2,0,"th",14),e.YNc(39,P,3,4,"td",15),e.BQk(),e.YNc(40,M,1,0,"tr",18),e.YNc(41,O,1,0,"tr",19),e.qZA(),e.qZA(),e.TgZ(42,"div",8),e.TgZ(43,"h2"),e._uU(44,"Ex-Protocol Behaviors"),e.qZA(),e.TgZ(45,"table",9),e.ynx(46,10),e.YNc(47,Y,2,0,"th",11),e.YNc(48,N,2,1,"td",12),e.BQk(),e.ynx(49,13),e.YNc(50,B,2,0,"th",14),e.YNc(51,q,3,4,"td",15),e.BQk(),e.ynx(52,16),e.YNc(53,F,2,0,"th",14),e.YNc(54,Q,3,4,"td",15),e.BQk(),e.ynx(55,17),e.YNc(56,L,2,0,"th",14),e.YNc(57,j,3,4,"td",15),e.BQk(),e.YNc(58,z,1,0,"tr",18),e.YNc(59,J,1,0,"tr",19),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(6),e.hij("",e.xi3(7,11,a.totalDistributeReward+a.use2earnService.distributedTiTiRewards,2)," TiTi"),e.xp6(7),e.hij("",e.xi3(14,14,a.userDistributedReward+(a.use2earnService.buyTiUSDPersonalReward+a.use2earnService.buyTiTiPersonalReward-a.use2earnService.buyTiUSDPersonalRewardRate-a.use2earnService.buyTiTiPersonalRewardRate>0?a.use2earnService.buyTiUSDPersonalReward+a.use2earnService.holdTiUSDPersonalReward+a.use2earnService.buyTiTiPersonalReward-a.use2earnService.buyTiUSDPersonalRewardRate-a.use2earnService.buyTiTiPersonalRewardRate:a.use2earnService.holdTiUSDPersonalReward),4)," TiTi"),e.xp6(7),e.hij("",e.xi3(21,17,a.claimableRewards,4)," TiTi"),e.xp6(2),e.Q6J("disabled",a.claimableRewards<=0||a.isLoading),e.xp6(1),e.Oqu(a.isLoading?"waiting...":"CLAIM"),e.xp6(4),e.Q6J("dataSource",a.dataSource1),e.xp6(13),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(4),e.Q6J("dataSource",a.dataSource2),e.xp6(13),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns))},directives:[b.Q,h.lW,o.BZ,o.w1,o.fO,o.Dz,o.as,o.nj,o.ge,o.ev,o.XQ,o.Gk],pipes:[R.p],styles:[".mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:#1de9b6}.use2earn-wrapper[_ngcontent-%COMP%]{padding:12px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;align-items:center;grid-column-gap:24px;column-gap:24px;grid-row-gap:24px;row-gap:24px}.biz-info-card[_ngcontent-%COMP%]{min-height:120px;padding:18px;grid-column-start:span 2;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.biz-info-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column-start:span 4;margin-left:12px}.biz-info-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{grid-column-start:span 3;align-self:end;font-size:18px;margin-left:12px}.biz-info-card[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{grid-column-start:span 1}.activity-table-wrapper[_ngcontent-%COMP%]{grid-column-start:span 3;padding:12px;display:flex;align-items:center;flex-direction:column;min-height:360px}.activity-table[_ngcontent-%COMP%]{width:100%;background-color:transparent}.activity-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .activity-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0 4px}.activity-table[_ngcontent-%COMP%]   .left-align[_ngcontent-%COMP%]{text-align:left}.activity-table[_ngcontent-%COMP%]   .right-align[_ngcontent-%COMP%]{text-align:right}@media screen and (max-width: 1024px){.use2earn-wrapper[_ngcontent-%COMP%]{width:100%;padding:12px;margin:0;display:grid;grid-template-columns:1fr;grid-row-gap:12px;row-gap:12px;grid-column-gap:0;column-gap:0}.biz-info-card[_ngcontent-%COMP%]{width:100%;margin:0;min-height:80px}.activity-table-wrapper[_ngcontent-%COMP%]{width:100%;margin:0;padding:12px}}"]}),t})()}];let $=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(k)],u.Bz]}),t})();var H=r(87841);let E=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,$,o.p0,h.ot,H.m]]}),t})()}}]);