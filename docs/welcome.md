---
title: Join BlogBook 
---

<div class='form-style-2'>
    <div class='form-style-2-heading'>Provide your information</div>
    
<p>If you are interested to publish your articles, poems, etc. ,
please contact us:</p>
<form name='contact' netlify netlify-honeypot='bot-field' hidden>
      <input type='text' name='contactname' />
      <input type='email' name='email' />
      <input type='text' name='tel_no_1' />
      <input type='text' name='tel_no_2' />
      <textarea name='message'></textarea>
      <div data-netlify-recaptcha></div>
</form>

<form name='contact' method='POST'>
    <input type='hidden' name='form-name' value='contact' />
    <label ><span>Name <span class='required'>*</span></span><input type='text' class='input-field' name='contactname' id='contactname' value='' /></label>
    <label ><span>Email <span class='required'>*</span></span><input type='text' class='input-field' name='email' id='email'  /></label>
    <label><span>Telephone</span>
    <input type='text' class='tel-number-field' name='tel_no_1' maxlength='3'/>-<input type='text'
        class='tel-number-field2' name='tel_no_2' maxlength='7'/></label>     
    <label>
            <span>Message <span class='required'></span></span>
            <textarea name='message' id='message' class='textarea-field'></textarea></label>            
    <label><span>&nbsp;</span><button type='submit'>Send</button></label>
</form>
</div>

