'use strict';
const snippetSamples = [
  {
    "id": "total",
    "name": "JavaScript · Fix an order total",
    "language": "javascript",
    "description": "Replace addition with multiplication when calculating an order total.",
    "original": "function total(price, quantity) {\n  return price + quantity;\n}\n",
    "modified": "function total(price, quantity) {\n  return price * quantity;\n}\n"
  },
  {
    "id": "css",
    "name": "CSS · Make a card responsive",
    "language": "css",
    "description": "Replace a fixed card width with a flexible width and maximum.",
    "original": ".card {\n  width: 600px;\n  padding: 24px;\n}\n",
    "modified": ".card {\n  width: 100%;\n  max-width: 600px;\n  box-sizing: border-box;\n  padding: 24px;\n}\n"
  },
  {
    "id": "html",
    "name": "HTML · Add an accessible form label",
    "language": "html",
    "description": "Connect a visible label to its input rather than relying on placeholder text.",
    "original": "<input type=\"email\" placeholder=\"Email address\">\n<button>Subscribe</button>\n",
    "modified": "<label for=\"email\">Email address</label>\n<input id=\"email\" type=\"email\" autocomplete=\"email\">\n<button type=\"submit\">Subscribe</button>\n"
  },
  {
    "id": "json",
    "name": "JSON · Compare environment settings",
    "language": "json",
    "description": "Inspect changes to a fictional environment configuration.",
    "original": "{\n  \"environment\": \"development\",\n  \"logging\": true,\n  \"retryCount\": 1\n}\n",
    "modified": "{\n  \"environment\": \"production\",\n  \"logging\": false,\n  \"retryCount\": 3\n}\n"
  },
  {
    "id": "sql",
    "name": "SQL · Filter active customers",
    "language": "sql",
    "description": "Compare a query with an explicit active-status filter and ordering.",
    "original": "SELECT id, name\nFROM customers;\n",
    "modified": "SELECT id, name\nFROM customers\nWHERE status = 'active'\nORDER BY name;\n"
  },
  {
    "id": "python",
    "name": "Python · Fix a range boundary",
    "language": "python",
    "description": "Include the last day of the week by correcting the exclusive range endpoint.",
    "original": "for day in range(1, 7):\n    print(day)\n",
    "modified": "for day in range(1, 8):\n    print(day)\n"
  },
  {
    "id": "powershell",
    "name": "PowerShell · Filter before counting",
    "language": "powershell",
    "description": "Count running services instead of counting all services.",
    "original": "$services = Get-Service\n$services.Count\n",
    "modified": "$services = Get-Service | Where-Object Status -eq 'Running'\n$services.Count\n"
  }
];
const webSamples = [
  {
    "id": "counter",
    "name": "Counter · Fix a double increment",
    "description": "Enable JavaScript, run both previews, then click each counter. The original adds two; the modified adds one.",
    "original": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><p>MIGHTORA PLAYGROUND</p><h1>One small change.</h1><p>Watch the counter behaviour.</p><button id=\"counter\">Count: 0</button></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n",
      "script.js": "let count = 0;\ndocument.querySelector('#counter').onclick = () => {\n  count += 2;\n  document.querySelector('#counter').textContent = 'Count: ' + count;\n  console.log('Counter is', count);\n};"
    },
    "modified": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><p>MIGHTORA PLAYGROUND</p><h1>One small change.</h1><p>Watch the counter behaviour.</p><button id=\"counter\">Count: 0</button></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n",
      "script.js": "let count = 0;\ndocument.querySelector('#counter').onclick = () => {\n  count += 1;\n  document.querySelector('#counter').textContent = 'Count: ' + count;\n  console.log('Counter is', count);\n};"
    },
    "selected": "index.html",
    "javascript": true
  },
  {
    "id": "responsive",
    "name": "Layout · Fix a phone overflow",
    "description": "Choose Phone width and run both previews. Compare the fixed-width card with the responsive version.",
    "original": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Responsive holiday card</h1><div class=\"card\"><h2>Family holiday</h2><p>Flights, hotel and a day at the beach.</p></div></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n\n.card { width: 600px; padding: 24px; background: white; border: 1px solid #aaa; }",
      "script.js": ""
    },
    "modified": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Responsive holiday card</h1><div class=\"card\"><h2>Family holiday</h2><p>Flights, hotel and a day at the beach.</p></div></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n\n.card { width: 100%; max-width: 600px; box-sizing: border-box; padding: 24px; background: white; border: 1px solid #aaa; }",
      "script.js": ""
    },
    "selected": "style.css",
    "javascript": false
  },
  {
    "id": "selector",
    "name": "JavaScript · Fix a missing element selector",
    "description": "Enable JavaScript and run. The original logs a selector error; the modified button updates the status.",
    "original": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Christmas dinner checklist</h1><p>Vegetables · roast potatoes · gravy</p><button id=\"ready\">Mark everything ready</button><p id=\"status\">Still preparing</p></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n",
      "script.js": "document.querySelector('#done').onclick = () => {\n  document.querySelector('#status').textContent = 'Dinner is ready!';\n};"
    },
    "modified": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Christmas dinner checklist</h1><p>Vegetables · roast potatoes · gravy</p><button id=\"ready\">Mark everything ready</button><p id=\"status\">Still preparing</p></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n",
      "script.js": "document.querySelector('#ready').onclick = () => {\n  document.querySelector('#status').textContent = 'Dinner is ready!';\n  console.log('Checklist completed');\n};"
    },
    "selected": "script.js",
    "javascript": true
  },
  {
    "id": "contrast",
    "name": "CSS · Improve button contrast",
    "description": "Run both previews to see how a darker background makes white button text more readable.",
    "original": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Readable buttons</h1><p>Compare the button text and background.</p><button>Save changes</button></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n\nbutton { background: #a7f3d0; color: white; }",
      "script.js": ""
    },
    "modified": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Readable buttons</h1><p>Compare the button text and background.</p><button>Save changes</button></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n\nbutton { background: #047857; color: white; }",
      "script.js": ""
    },
    "selected": "style.css",
    "javascript": false
  },
  {
    "id": "numbers",
    "name": "Form · Fix text treated as a number",
    "description": "Enable JavaScript and run. Calculate with two items: the original produces 25; the modified produces 7.",
    "original": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Delivery estimate</h1><p>Enter the number of items:</p><input id=\"quantity\" type=\"number\" value=\"2\" min=\"1\"><button id=\"calculate\">Calculate</button><p id=\"result\"></p></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n",
      "script.js": "document.querySelector('#calculate').onclick = () => {\n  const quantity = document.querySelector('#quantity').value;\n  const total = quantity + 5;\n  document.querySelector('#result').textContent = 'Items plus packing: ' + total;\n  console.log('Result:', total);\n};"
    },
    "modified": {
      "index.html": "<!doctype html>\n<html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Delivery estimate</h1><p>Enter the number of items:</p><input id=\"quantity\" type=\"number\" value=\"2\" min=\"1\"><button id=\"calculate\">Calculate</button><p id=\"result\"></p></main><script src=\"script.js\"></script></body></html>",
      "style.css": "body { margin: 0; font: 16px system-ui; background: #f0fdf4; color: #111827; }\nmain { max-width: 440px; padding: 32px; margin: 0 auto; }\nbutton { background: #047857; color: white; border: 0; border-radius: 8px; padding: 14px; cursor: pointer; }\n",
      "script.js": "document.querySelector('#calculate').onclick = () => {\n  const quantity = Number(document.querySelector('#quantity').value);\n  const total = quantity + 5;\n  document.querySelector('#result').textContent = 'Items plus packing: ' + total;\n  console.log('Result:', total);\n};"
    },
    "selected": "script.js",
    "javascript": true
  }
];
const $=id=>document.getElementById(id);
const projects={original:{files:{'index.html':'','style.css':'','script.js':''},selected:'index.html'},modified:{files:{'index.html':'','style.css':'','script.js':''},selected:'index.html'}};
function download(name,content,type='text/plain'){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function save(side){projects[side].files[projects[side].selected]=$(side+'-editor').value}
function display(side){const p=projects[side],select=$(side+'-file');select.replaceChildren(...Object.keys(p.files).sort().map(name=>{const o=document.createElement('option');o.value=o.textContent=name;return o}));select.value=p.selected;$(side+'-editor').value=p.files[p.selected]||''}
for(const side of Object.keys(projects)){
 const pane=document.createElement('div');pane.className='project-pane';pane.innerHTML=`<h3>${side==='original'?'Original':'Modified'} project</h3><label for="${side}-file">File</label> <select id="${side}-file"></select><input type="file" id="${side}-import" multiple accept=".html,.css,.js,.json,.svg,.txt" aria-label="Import ${side} web files"><div class="toolbar"><button id="${side}-add">Add file</button><button id="${side}-diff">Compare selected file</button></div><label for="${side}-editor">Source code</label><textarea id="${side}-editor" spellcheck="false"></textarea><div class="frame-wrap"><iframe id="${side}-preview" title="${side} web preview" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe></div><h4>Console output</h4><pre class="console" id="${side}-console" aria-label="${side} console"></pre>`;
 $('project-panes').append(pane);display(side);
 $(side+'-editor').oninput=()=>save(side);
 $(side+'-file').onchange=e=>{save(side);projects[side].selected=e.target.value;display(side)};
 $(side+'-add').onclick=()=>{const name=prompt('Relative filename, e.g. components/card.css');if(!name)return;if(!/^[\w./-]+\.(html|css|js|json|svg|txt)$/.test(name)||name.split('/').includes('..')||name.startsWith('/')){alert('Use a relative HTML, CSS, JS, JSON, SVG or text filename without parent directories.');return}save(side);projects[side].files[name]??='';projects[side].selected=name;display(side)};
 $(side+'-import').onchange=async e=>{try{save(side);for(const file of e.target.files){if(file.size>200000)throw Error(file.name+' exceeds 200 KB.');if(!/\.(html|css|js|json|svg|txt)$/i.test(file.name))throw Error('Unsupported file: '+file.name);projects[side].files[file.name]=await file.text();projects[side].selected=file.name}display(side);$('project-status').textContent='Imported locally. Press Run to refresh previews.'}catch(err){$('project-status').textContent=err.message}e.target.value=''};
 $(side+'-diff').onclick=()=>{save('original');save('modified');const name=projects[side].selected;$('code-original').value=projects.original.files[name]||'';$('code-modified').value=projects.modified.files[name]||'';$('language').value=({html:'html',js:'javascript',css:'css',json:'json',svg:'xml'})[name.split('.').pop()]||'plaintext';$('btn-compare').click();$('tool').scrollIntoView({block:'start'})};
}
let lastSnippet = ['', ''];
let lastWeb = JSON.stringify({original: projects.original.files, modified: projects.modified.files});
$('example').onclick=()=>{
 const sample=snippetSamples.find(x=>x.id===$('snippet-sample').value);
 if(!sample)return;
 const current=[$('code-original').value,$('code-modified').value];
 if(current.some((value,i)=>value!==lastSnippet[i]) && !confirm('Loading this sample replaces both snippets. Continue?'))return;
 $('language').value=sample.language;
 $('code-original').value=sample.original;
 $('code-modified').value=sample.modified;
 lastSnippet=[sample.original,sample.modified];
 $('sample-description').textContent=sample.description;
 $('btn-compare').click();
};
$('swap').onclick=()=>{const t=$('code-original').value;$('code-original').value=$('code-modified').value;$('code-modified').value=t;$('btn-compare').click()};
$('patch').onclick=()=>{download('comparison.diff',Diff.createPatch('code.txt',$('code-original').value,$('code-modified').value,'Original','Modified'))};
for(const side of ['original','modified'])$('import-'+side).onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>200000)throw Error('Please import a file under 200 KB.');$('code-'+side).value=await f.text()}catch(err){alert(err.message)}e.target.value=''};
$('web-example').onclick=()=>{
 const sample=webSamples.find(x=>x.id===$('web-sample').value);
 if(!sample)return;
 for(const side of Object.keys(projects))save(side);
 const current=JSON.stringify({original:projects.original.files,modified:projects.modified.files});
 if(current!==lastWeb && !confirm('Loading this sample replaces both web projects. Continue?'))return;
 for(const side of Object.keys(projects)){
  projects[side].files={...sample[side]};
  projects[side].selected=sample.selected;
  display(side);
 }
 lastWeb=JSON.stringify({original:projects.original.files,modified:projects.modified.files});
 $('stop').click();
 $('project-status').textContent=sample.description+' '+(sample.javascript?'JavaScript is optional and remains under your control.':'No JavaScript is needed.');
};
// Build a fresh isolated document with local resources only. No same-origin sandbox permission.
function compile(files,side,token,scripts){
 const doc=new DOMParser().parseFromString(files['index.html']||'<p>Add index.html to preview your project.</p>','text/html');
 doc.querySelectorAll('base,meta[http-equiv],iframe,object,embed').forEach(e=>e.remove());
 const local=name=>{try{const u=new URL(name,'https://local.invalid/');if(u.origin!=='https://local.invalid')return undefined;return files[decodeURIComponent(u.pathname.slice(1))]}catch{return undefined}};
 doc.querySelectorAll('link[rel=stylesheet]').forEach(link=>{const content=local(link.getAttribute('href'));if(content!==undefined){const style=doc.createElement('style');style.textContent=content;link.replaceWith(style)}else link.remove()});
 doc.querySelectorAll('script').forEach(script=>{if(!scripts||script.type==='module'){script.remove();return}if(script.src){const content=local(script.getAttribute('src'));if(content===undefined){script.remove();return}script.removeAttribute('src');script.textContent=content}});
 doc.querySelectorAll('a,form').forEach(el=>{el.removeAttribute('target');if(el.tagName==='A' && /^(https?:|\/\/)/i.test(el.getAttribute('href')||''))el.removeAttribute('href')});
 const csp=doc.createElement('meta');csp.httpEquiv='Content-Security-Policy';csp.content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; font-src data:; connect-src 'none'; frame-src 'none'; object-src 'none'; form-action 'none'; base-uri 'none'";doc.head.prepend(csp);
 const bridge=doc.createElement('script');bridge.textContent=`(()=>{const send=(level,args)=>{let message;try{message=args.map(x=>typeof x==='string'?x:JSON.stringify(x)).join(' ')}catch{message='[Unserialisable console value]'}parent.postMessage({type:'mightora-console',token:${JSON.stringify(token)},side:${JSON.stringify(side)},level,message},'*')};for(const level of ['log','info','warn','error'])console[level]=(...args)=>send(level,args);addEventListener('error',e=>send('error',[e.message]));addEventListener('unhandledrejection',e=>send('error',[String(e.reason)]));})();`;csp.after(bridge);
 return '<!doctype html>\n'+doc.documentElement.outerHTML;
}
let tokens={},counts={};
window.addEventListener('message',e=>{const d=e.data;if(!d||d.type!=='mightora-console'||!projects[d.side]||e.source!==$(d.side+'-preview').contentWindow||d.token!==tokens[d.side])return;if((counts[d.side]??0)>=200)return;counts[d.side]=(counts[d.side]??0)+1;const output=$(d.side+'-console');output.textContent+=`[${d.level}] ${String(d.message).slice(0,2000)}\n`;output.scrollTop=output.scrollHeight});
$('run').onclick=()=>{for(const side of Object.keys(projects)){save(side);tokens[side]=crypto.randomUUID();counts[side]=0;$(side+'-console').textContent='';$(side+'-preview').setAttribute('sandbox',$('scripts').checked?'allow-scripts':'');$(side+'-preview').srcdoc=compile(projects[side].files,side,tokens[side],$('scripts').checked)}$('project-status').textContent='Previews refreshed. Compare layouts and interact with both versions.'};
$('stop').onclick=()=>{for(const side of Object.keys(projects)){$(side+'-preview').srcdoc='';tokens[side]=''}$('project-status').textContent='Previews stopped.'};
$('viewport').onchange=()=>{for(const side of Object.keys(projects))$(side+'-preview').style.width=$('viewport').value};
// ZIP, stored entries: no runtime package or server required.
function zip(files){const encoder=new TextEncoder(),chunks=[],central=[];let offset=0;const crc=bytes=>{let c=0xffffffff;for(const b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return (c^0xffffffff)>>>0};function header(size){const a=new Uint8Array(size);return [a,new DataView(a.buffer)]}for(const [path,content]of Object.entries(files)){const name=encoder.encode(path),data=encoder.encode(content),sum=crc(data);const [h,v]=header(30);v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint16(6,0x800,true);v.setUint16(12,33,true);v.setUint32(14,sum,true);v.setUint32(18,data.length,true);v.setUint32(22,data.length,true);v.setUint16(26,name.length,true);chunks.push(h,name,data);const [c,w]=header(46);w.setUint32(0,0x02014b50,true);w.setUint16(4,20,true);w.setUint16(6,20,true);w.setUint16(8,0x800,true);w.setUint16(14,33,true);w.setUint32(16,sum,true);w.setUint32(20,data.length,true);w.setUint32(24,data.length,true);w.setUint16(28,name.length,true);w.setUint32(42,offset,true);central.push(c,name);offset+=h.length+name.length+data.length}const length=central.reduce((n,c)=>n+c.length,0);const [end,v]=header(22);v.setUint32(0,0x06054b50,true);v.setUint16(8,Object.keys(files).length,true);v.setUint16(10,Object.keys(files).length,true);v.setUint32(12,length,true);v.setUint32(16,offset,true);return new Blob([...chunks,...central,end],{type:'application/zip'})}
$('workspace').onclick=()=>{const files={'mightora-diff.code-workspace':JSON.stringify({folders:[{path:'original'},{path:'modified'}]},null,2),'original/snippet.txt':$('code-original').value,'modified/snippet.txt':$('code-modified').value,'README.txt':'Open mightora-diff.code-workspace in desktop VS Code. Use code --diff original/snippet.txt modified/snippet.txt for the snippet comparison. Web projects are in original/ and modified/.\n'};for(const side of Object.keys(projects)){save(side);for(const [name,value]of Object.entries(projects[side].files))files[side+'/'+name]=value}download('mightora-diff.zip',zip(files),'application/zip');$('ide-status').textContent='Workspace downloaded. Extract it before opening the folder in VS Code.'};
$('desktop').onclick=()=>{const path=$('folder-path').value.trim().replace(/\\/g,'/');if(!/^(\/|[A-Za-z]:\/)/.test(path)){$('ide-status').textContent='Enter an absolute path to your extracted workspace first.';return}const uri='vscode://file/'+path.split('/').map(encodeURIComponent).join('/');location.href=uri;$('ide-status').textContent='Launch requested. Your browser may ask permission to open installed VS Code.'};

