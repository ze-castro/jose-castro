document.addEventListener('DOMContentLoaded', () => {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const compareBtn = document.getElementById('compare-btn');
    const resetBtn = document.getElementById('reset-btn');
    const result = document.getElementById('result');
    const legend = document.getElementById('legend');
  
    compareBtn.addEventListener('click', () => {
      const str1 = text1.value;
      const str2 = text2.value;
      
      if (!str1 || !str2) {
        result.innerHTML = '<p class="error">Please enter text in both fields.</p>';
        return;
      }
      
      const diff = Diff.diffWords(str1, str2);
      let html = '';
      
      diff.forEach(part => {
        const className = part.added ? 'addition' : part.removed ? 'deletion' : 'same';
        const textWithLineBreaks = part.value.replace(/\n/g, '<br>');
        html += `<span class="${className}">${textWithLineBreaks}</span>`;
      });
      
      result.innerHTML = html;
      result.style.display = 'block';
      legend.style.display = 'flex';
    });
  
    resetBtn.addEventListener('click', () => {
      text1.value = '';
      text2.value = '';
      result.innerHTML = '';
    });
  });