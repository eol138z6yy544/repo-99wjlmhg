function e(r){const t=typeof r=="string"?parseFloat(r.replace(/\s/g,"")):r;return isNaN(t)?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}export{e as f};
