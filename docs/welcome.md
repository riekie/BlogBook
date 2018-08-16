---
title: Join BlogBook 
---
<p>If you are interested to publish your articles, poems, etc. ,
please contact us:</p>
<div class="form-style-2">
    <div class="form-style-2-heading">Provide your information</div>
    <form name="contact" method="POST" data-netlify="true" >
        <label for="contactname"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="contactname" id="contactname" value="" /></label>
        <label for="email"><span>Email <span class="required">*</span></span><input type="text" class="input-field" name="email" id="email" value="" /></label>
        <label><span>Telephone</span><input type="text" class="tel-number-field" name="tel_no_1" value="" maxlength="3" />-<input type="text" class="tel-number-field2" name="tel_no_2" value="" maxlength="7"/></label>
         <label for="subject"><span>Regarding</span><select name="subject" id="subject" class="select-field">
                    <option value="General Question">General</option>
                    <option value="Advertise">Advertisement</option>
                    <option value="Author">Author</option>
                </select></label>
        <label for="message">
        <span>Message <span class="required">*</span></span>
        <textarea name="message" id="message" class="textarea-field"></textarea></label>
        <div data-netlify-recaptcha></div>
        <label><span>&nbsp;</span><button type="submit">Send</button></label>
    </form>
</div>