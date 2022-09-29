// Форма,которая нажимается при клике на Авиа и Агентам.

export function dropDown() {


    const fly = document.querySelector('.fly');
    const agent = document.querySelector('.agent');
    const agentDrop = document.querySelector('.dropagent');
    const flyDrop = document.querySelector('.first__list');

    fly.addEventListener('click', (e) => {
        e.preventDefault();
        fly.classList.toggle('active');
        flyDrop.classList.toggle('active');
    });

    if (document.documentElement.clientWidth > 1200) {
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (!target.closest('.first__list') && !target.closest('.fly')) {
                flyDrop.classList.remove('active');
                fly.classList.remove('active');
            }
        })
    }

    agent.addEventListener('click', (e) => {
        e.preventDefault();
        agentDrop.classList.toggle('active');
        agent.classList.toggle('active');
    });

    if (document.documentElement.clientWidth > 1200) {
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (!target.closest('.dropagent') && !target.closest('.agent')) {
                agentDrop.classList.remove('active');
                agent.classList.remove('active');
            }
        })
    }

}

dropDown();