// https://stackoverflow.com/a/10730063
// See also: https://stackoverflow.com/a/10730777
highlightWord(document.body,'para');

function highlightWord(root,word){
  textNodesUnder(root).forEach(highlightWords);

  function textNodesUnder(root){
    var n,a=[],w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null,false);
    while(n=w.nextNode()) a.push(n);
    return a;
  }

  function highlightWords(n){
    for (var i; (i=n.nodeValue.indexOf(word,i)) > -1; n=after){
      var after = n.splitText(i+word.length);
      var highlighted = n.splitText(i);
      var span = document.createElement('span');
      span.className = 'highlighted';
      span.appendChild(highlighted);
      after.parentNode.insertBefore(span,after);
    }
  }
}
​