import React from 'react';
import './_pillar.home.mail_chimp_signup.source.scss';

const MailChimpSignup = () => (
  <div id="mc_embed_signup" className="p-mail_chimp_signup">
    <form
      action="https://boilermake.us18.list-manage.com/subscribe/post?u=c90b22dd57d3dc992bd4731ec&amp;id=fb94bf1d8d"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate" target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll" className="p-mail_chimp_signup__group">
        <label htmlFor="mce-EMAIL" className="p-mail_chimp_signup__label">Interested in updates?</label>
        <input type="email" placeholder="you@school.edu" name="EMAIL" className="required email p-mail_chimp_signup__input" id="mce-EMAIL" />
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
          <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
        </div>
        <div style={{ position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c90b22dd57d3dc992bd4731ec_fb94bf1d8d" tabIndex="-1" value="" /></div>
        <input type="submit" value="Yup!" name="subscribe" id="mc-embedded-subscribe" className="button p-mail_chimp_signup__button" />
      </div>
    </form>
  </div>
);

export default MailChimpSignup;
