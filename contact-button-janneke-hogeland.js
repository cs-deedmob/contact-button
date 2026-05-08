(function () {
  /* ============================================================
     ✏️  CUSTOMISE HERE — change these values for each site
     ============================================================ */
  var CONFIG = {
    name:    'Janneke de Vries',               // ✏️ Name
   // role:    'Customer Success · Deedmob',  // ✏️ Role (or leave empty: '')
   // photo:   'https://i.pravatar.cc/96?img=47', // ✏️ Photo URL
    phone:      '06 21 81 57 72',           // ✏️ Display phone number
    phoneHref:  'tel:+31621815772',         // ✏️ Phone for tel: link (no spaces)
    email:      'janneke@vrijwilligerinhethogeland.nl',         // ✏️ Email address
    color:   '#ff6633',                     // ✏️ Brand colour
    position: 'left',                       // ✏️ 'left' or 'right'
    labelPhone: 'Bel mij',                  // ✏️ Phone label
    labelEmail: 'Mail mij',                 // ✏️ Email label
    cardWidth: '320px',                    // ✏️ Card width — increase if email is too long
  };
  /* ============================================================ */

  var pos = CONFIG.position === 'right' ? 'right:24px;' : 'left:24px;';
  var btnMargin = CONFIG.position === 'right' ? 'margin-left:auto;' : 'margin-right:auto;';
  var c = CONFIG.color;

  var style = document.createElement('style');
  style.textContent = [
    '#cw-widget{position:fixed;bottom:24px;' + pos + 'z-index:9999;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;display:flex;flex-direction:column;align-items:flex-start;}',
    '#cw-toggle{width:56px;height:56px;border-radius:50%;background:' + c + ';border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.18);transition:transform 0.2s ease;' + btnMargin + '}',
    '#cw-toggle:hover{transform:scale(1.06);}',
    '#cw-toggle svg{width:24px;height:24px;fill:white;}',
    '#cw-card{background:#fff;border-radius:16px;box-shadow:0 8px 24px rgba(0,0,0,0.12);padding:20px;width:' + CONFIG.cardWidth + ';margin-bottom:12px;display:none;animation:cwPop 0.2s ease;}',
    '#cw-card.open{display:block;}',
    '@keyframes cwPop{from{opacity:0;transform:translateY(8px) scale(0.97);}to{opacity:1;transform:translateY(0) scale(1);}}',
    '.cw-profile{display:flex;align-items:center;gap:12px;margin-bottom:16px;}',
    '.cw-avatar{width:48px;height:48px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid #e8f5e9;}',
    '.cw-name{font-size:15px;font-weight:600;color:#1a1a1a;margin:0 0 2px;}',
    '.cw-role{font-size:12px;color:#777;margin:0;}',
    '.cw-divider{height:1px;background:#f0f0f0;margin-bottom:14px;}',
    '.cw-links{display:flex;flex-direction:column;gap:10px;}',
    '.cw-link{display:flex;align-items:center;gap:10px;text-decoration:none;color:#1a1a1a;font-size:13.5px;padding:8px 10px;border-radius:8px;background:#f7f7f7;transition:background 0.15s;}',
    '.cw-link:hover{background:#eef5ee;color:' + c + ';}',
    '.cw-icon{width:32px;height:32px;border-radius:8px;background:' + c + ';display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.cw-icon svg{width:16px;height:16px;fill:white;}',
    '.cw-link-text{display:flex;flex-direction:column;}',
    '.cw-link-label{font-size:11px;color:#555;line-height:1;margin-bottom:2px;}',
    '.cw-link-value{font-size:13px;color:inherit;line-height:1;}',
  ].join('');
  document.head.appendChild(style);

  var roleHTML = CONFIG.role ? '<p class="cw-role">' + CONFIG.role + '</p>' : '';

  var html = '<div id="cw-card">'
    + '<div class="cw-profile">'
    + '<img class="cw-avatar" src="' + CONFIG.photo + '" alt="Photo of ' + CONFIG.name + '" />'
    + '<div><p class="cw-name">' + CONFIG.name + '</p>' + roleHTML + '</div>'
    + '</div>'
    + '<div class="cw-divider"></div>'
    + '<div class="cw-links">'
    + '<a class="cw-link" href="' + CONFIG.phoneHref + '">'
    + '<span class="cw-icon"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg></span>'
    + '<span class="cw-link-text"><span class="cw-link-label">' + CONFIG.labelPhone + '</span><span class="cw-link-value">' + CONFIG.phone + '</span></span>'
    + '</a>'
    + '<a class="cw-link" href="mailto:' + CONFIG.email + '">'
    + '<span class="cw-icon"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span>'
    + '<span class="cw-link-text"><span class="cw-link-label">' + CONFIG.labelEmail + '</span><span class="cw-link-value">' + CONFIG.email + '</span></span>'
    + '</a>'
    + '</div></div>'
    + '<button id="cw-toggle" aria-label="Open contact card">'
    + '<svg id="cw-icon-open" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>'
    + '<svg id="cw-icon-close" viewBox="0 0 24 24" style="display:none"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'
    + '</button>';

  var wrapper = document.createElement('div');
  wrapper.id = 'cw-widget';
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  var toggle   = document.getElementById('cw-toggle');
  var card     = document.getElementById('cw-card');
  var iconOpen  = document.getElementById('cw-icon-open');
  var iconClose = document.getElementById('cw-icon-close');

  toggle.addEventListener('click', function () {
    var isOpen = card.classList.toggle('open');
    iconOpen.style.display  = isOpen ? 'none'  : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
    toggle.setAttribute('aria-label', isOpen ? 'Close contact card' : 'Open contact card');
  });
})();
