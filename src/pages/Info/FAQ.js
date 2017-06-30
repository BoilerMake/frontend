import React from 'react';

const FAQ = () => {
    let questions = [
        {
            "title": "What is a hackathon?",
            "body": "A hackathon is not somewhere that you come to hack the NSA, but rather a great place for people to come together to work on incredible projects. You'll be surrounded by a group of incredibly intelligent and creative people, as well as brilliant mentors from some of the largest tech companies across the country. Hackathons can serve as a great place to learn, and you may end up surprising yourself on what you can accomplish the end of the weekend."
        },
        {
            "title": "Can I go?",
            "body": "You are good to go as long as you over 18 years of age!"
        },
        {
            "title": "Should I go?",
            "body": "We have <a href='https://medium.com/@BoilerMake/why-you-should-go-to-a-hackathon-2d4ede475c9' target='_blank'> this great article on Medium</a> to help with this question:"
        },
        {
            "title": "How do I get started?",
            "body": "You can start by filling out an application on this page. Don't worry you don't have to fill out an essay or interview to be accepted, you just have to fill out a couple details about yourself on application page."
        },
        {
            "title": "Do I have to pay?",
            "body": "No! BoilerMake is an all-expense paid experience.  You do not have to pay for anything once you are here at BoilerMake, which includes free food and swag!!! "
        },
        {
            "title": "How do I get there?",
            "body": "If your college has a large group of people and is within a reasonable distance of Purdue University, we may be able to provide a bus to transport you to Purdue. If transportation is going to be an issue, please contact us at team@boilermake.org and we'll try to figure something out.  We're crossing our fingers Elon comes up with the hyper tube, so we can get a lot more of you here."
        },
        {
            "title": "What do I bring?",
            "body": "You should bring you student ID for verification and a laptop. It's also a good idea to bring a blanket/sleeping bag and an extra change of clothes. "
        },
        {
            "title": "Am I allowed to sleep?",
            "body": "Of course - in fact we encourage it!  We will provide air mattresses and comforters for you to take a break from hacking. However, if you're too busy to partake in such activities, we'll make sure you have enough caffeine to keep you going."
        },
        {
            "title": "What if I want to shower?",
            "body": "For your sake and the people around you, please shower! We will provide you with a place to shower as well as towels that you can use."
        },
        {
            "title": "What is an API?",
            "body": "API stands for Application Protocol Interface. In the context of a hackathon, APIs can be used as tools to create really cool solutions to problems without having to do a lot of the busy work ahead of time. Many companies will have prizes for projects that utilize their API.  Don't worry if you're still confused, there will be plenty of people there to help you!"
        },
        {
            "title": "What is the maximum number of people on a team? (teams)",
            "body": "A maximum of 4 people can be on a team."
        },
        {
            "title": "Do I have to interact with other human beings? (teams)",
            "body": "No, you don't have to be on a team."
        },
        {
            "title": "Can I use code that I have written before hand?",
            "body": "We ask that you do not use any code that was written before the start of BoilerMake to keep a fair and level playing feel for all participants.  "
        },
        {
            "title": "Will there be any hardware?",
            "body": "We will have a bunch hardware available for hackers to borrow at the event with some help from our friends at MLH.  We'll be sure to let you guys know once we have the list of hardware finalized."

        }
    ];
    let questionList = questions.map((q,id)=>
        <div key={id}>
            <p style={{fontWeight: 700}}>{q.title}</p>
            {/*One of the FAQ items has HTML in it to easily make an offsite link, so we need to 'dangerously' set it*/}
            <p dangerouslySetInnerHTML={{__html: q.body}}/>
        </div>);
    return(
        <div className="pageContainer">
          <h1>Frequently Asked Questions</h1>
            {questionList}
        </div>
    );
};

export default FAQ;
