(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{131:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(33),o=n(66),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>3&&void 0!==f[3]?f[3]:"recent",o=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(f,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),f(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,f,d,l,p,m,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return f=e.sent,d=f.data.itemsAvailable.toNumber(),l=f.itemsRedeemed.toNumber(),p=d-l,m=f.data.price.toNumber(),j=f.data.goLiveDate.toNumber(),j=new Date(1e3*j),e.abrupt("return",{candyMachine:b,itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:j,price:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,f,l,O,g,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,f=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return O=e.sent,e.next=10,p(s.publicKey);case 10:return g=e.sent,e.next=13,f.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:O,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(6).Buffer)},362:function(e,t,n){},363:function(e,t,n){},366:function(e,t,n){},367:function(e,t){},369:function(e,t){},376:function(e,t){},391:function(e,t){},392:function(e,t){},417:function(e,t){},418:function(e,t){},425:function(e,t){},426:function(e,t){},484:function(e,t){},486:function(e,t){},500:function(e,t){},504:function(e,t){},506:function(e,t){},516:function(e,t){},518:function(e,t){},549:function(e,t){},551:function(e,t){},558:function(e,t){},559:function(e,t){},584:function(e,t){},585:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(28),b=n.n(u),f=(n(362),n(363),n(10)),d=n(1),l=n.n(d),p=n(4),m=n(13),j=n(130),O=n(132),g=n(321),x=n(612),v=n(617),y=n(621),h=n(620),S=(n(366),n(35)),k=n(53),w=n(170),P=n(131),T=n(30),R=Object(O.a)(w.a)(r||(r=Object(j.a)([""]))),K=O.a.span(c||(c=Object(j.a)([""]))),B=O.a.div(a||(a=Object(j.a)([""]))),L=Object(O.a)(x.a)(i||(i=Object(j.a)([""]))),M=function(e){e.days;var t=e.hours,n=e.minutes,r=e.seconds;e.completed;return Object(T.jsxs)(K,{children:[t," hours, ",n," minutes, ",r," seconds"]})},A=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)(!1),i=Object(m.a)(a,2),s=i[0],u=i[1],b=Object(o.useState)(!1),d=Object(m.a)(b,2),j=d[0],O=d[1],x=Object(o.useState)(!1),w=Object(m.a)(x,2),K=w[0],A=w[1],E=Object(o.useState)(),C=Object(m.a)(E,2),I=C[0],D=C[1],W=Object(o.useState)(),N=Object(m.a)(W,2),_=N[0],Y=N[1],F=Object(o.useState)(0),U=Object(m.a)(F,2),X=U[0],q=U[1],V=Object(o.useState)({open:!1,message:"",severity:void 0}),J=Object(m.a)(V,2),Z=J[0],z=J[1],G=Object(o.useState)(new Date(e.startDate)),Q=Object(m.a)(G,2),H=Q[0],$=Q[1],ee=Object(k.c)(),te=Object(o.useState)(),ne=Object(m.a)(te,2),re=ne[0],ce=ne[1],ae=function(){var t=Object(p.a)(l.a.mark((function t(){var n,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,A(!0),!ee||!(null===re||void 0===re?void 0:re.program)){t.next=10;break}return t.next=5,Object(P.c)(re,e.config,ee.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?z({open:!0,message:"Mint failed! Please try again!",severity:"error"}):z({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",O(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),z({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!ee){t.next=23;break}return t.next=21,e.connection.getBalance(ee.publicKey);case 21:i=t.sent,c(i/S.LAMPORTS_PER_SOL);case 23:return A(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ee){t.next=5;break}return t.next=3,e.connection.getBalance(ee.publicKey);case 3:n=t.sent,c(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ee,e.connection]),Object(o.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n,r,c,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ee){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(ee,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsRemaining,i=n.itemsAvailable,o=n.price,O(0===a),$(c),ce(r),D(i),Y(a),q(o/S.LAMPORTS_PER_SOL);case 16:case"end":return t.stop()}}),t)})))()}),[ee,e.candyMachineId,e.connection]),Object(T.jsxs)("main",{children:[Object(T.jsx)("div",{className:"collection",children:Object(T.jsx)("img",{src:"collection.png",alt:"DevBrooklyn NFT Collection",title:"DevBrooklyn NFT Collection"})}),Object(T.jsxs)("div",{className:"content",children:[Object(T.jsxs)("code",{children:["Network: ","mainnet-beta"]}),ee&&Object(T.jsxs)("p",{children:["Address: ",Object(P.d)(ee.publicKey.toBase58()||"")]}),ee&&Object(T.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),ee&&Object(T.jsxs)("p",{children:["Items available: ",_," / ",I]}),Object(T.jsx)(B,{children:ee?Object(T.jsx)(L,{disabled:j||K||!s,onClick:ae,variant:"contained",children:j?"SOLD OUT":s?K?Object(T.jsx)(v.a,{}):"MINT FOR "+X+" SOL":Object(T.jsx)(g.a,{date:H,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:M})}):Object(T.jsx)(R,{children:"Connect Wallet"})}),Object(T.jsx)(y.a,{open:Z.open,autoHideDuration:6e3,onClose:function(){return z(Object(f.a)(Object(f.a)({},Z),{},{open:!1}))},children:Object(T.jsx)(h.a,{onClose:function(){return z(Object(f.a)(Object(f.a)({},Z),{},{open:!1}))},severity:Z.severity,children:Z.message})})]})]})},E=n(33),C=n(114),I=n(349),D=n(618),W=new E.d.PublicKey("4hS9QnGYvXPJPfq9T9XU8RoPjTdapE36LF8XSjCRchb6"),N=new E.d.PublicKey("Cfudoy2QEdEtu7BYXEkzwQ2924stZWK6X2vf3V4DrT1z"),_=new E.d.PublicKey("2Jr6pRZWLpCTVm2x6UdS3FbT5Yk6ov6ZYt9tcxqWMXBB"),Y="mainnet-beta",F=new E.d.Connection("https://api.mainnet-beta.solana.com"),U=parseInt("1632384000",10),X=Object(I.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),q=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(Y)}),[]),t=Object(o.useMemo)((function(){return[Object(C.a)(),Object(C.b)(),Object(C.c)(),Object(C.e)({network:Y}),Object(C.d)({network:Y})]}),[]);return Object(T.jsx)(D.a,{theme:X,children:Object(T.jsx)(k.a,{endpoint:e,children:Object(T.jsx)(k.b,{wallets:t,autoConnect:!0,children:Object(T.jsx)(w.b,{children:Object(T.jsx)(A,{candyMachineId:_,config:N,connection:F,startDate:U,treasury:W,txTimeout:3e4})})})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,622)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(q,{})}),document.getElementById("root")),V()}},[[585,1,2]]]);
//# sourceMappingURL=main.d189afdf.chunk.js.map