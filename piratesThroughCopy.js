javascript:(function(){
  const links=document.querySelectorAll("a");
  let matches=[];
  links.forEach(link=>{
    const href=link.href||link.getAttribute("href");
    if(href&&href.includes("id=")){matches.push(href);}
  });
  const old=document.getElementById("linkModal");if(old)old.remove();
  const modal=document.createElement("div");
  modal.id="linkModal";
  modal.style="position:fixed;top:20%;left:50%;transform:translateX(-50%);background:#fff;border:1px solid #333;padding:10px;z-index:9999;max-width:80%;max-height:60%;overflow:auto;";
  const title=document.createElement("h3");title.textContent="Links containing 'id='";modal.appendChild(title);
  const list=document.createElement("pre");list.textContent=matches.length>0?matches.join("\n"):"No links found.";modal.appendChild(list);
  const btn=document.createElement("button");btn.textContent="Copy to Clipboard";btn.onclick=function(){navigator.clipboard.writeText(matches.join("\n")).then(()=>{alert("Copied to clipboard!");});};modal.appendChild(btn);
  const close=document.createElement("button");close.textContent="Close";close.style.marginLeft="10px";close.onclick=function(){modal.remove();};modal.appendChild(close);
  document.body.appendChild(modal);
})();
