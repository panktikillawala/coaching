const reviews = [
    {
        id: 1,
        name: 'Franki Hale',
        job: 'Managing Director/Founder Sonder Associates',
        review: 'Pankti has helped me gain clarity and understanding on my next steps whenever I felt stuck. Through powerful questions she challenged my thinking which helped me set my goals and take action both in my professional and personal life. She creates a calm and comfortable environment making it easy to talk to her.'
    },
    {
        id: 2,
        //img: ""
        //name: 'FirstName LastInitial',
        job: 'HR Director, London',
        review: 'I have worked with Pankti for a number of coaching sessions and found them hugely rewarding.Not only has Pankti given me valuable time to reflect on work and personal situations, but she has helped me see scenarios differently and created the opportunity for me to explore what I really wanted.  Pankti created a safe yet challenging environment for each of our session.'
    },
   
    // {
    //     id: 3,
    //     name: 'SomeName LastInitial',
    //     job: 'Director',
    //     review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
    // },
    // {
    //     id: 4,
    //     name: 'Masha Raymers',
    //     job: 'SEO Specialist',
    //     review: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
    // },
    // {
    //     id: 5,
    //     name: 'Clement Percheron',
    //     job: 'Backend Developer',
    //     review: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.'
    // },
];

const name = document.getElementById('name');
const job = document.getElementById('job');
const review = document.getElementById('review');

const prevButton = document.querySelector('.btn-left');
const nextButton = document.querySelector('.btn-right');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];

    // img.src = item.img;
    name.textContent = item.name;
    review.textContent = item.review;
    job.textContent = item.job;

}

prevButton.addEventListener('click', function () {
    currentItem--;

    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
});

nextButton.addEventListener('click', function () {
    currentItem++;

    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem);
});



