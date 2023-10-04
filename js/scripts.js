const API_KEY='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'

const form = document.getElementById('chat-form');
const myText =  document.getElementById('mytext');
const responseText = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mytext = myText.value.trim();
    
    if (mytext){
        try{
            const response = await fetch('https://api.openai.com/v1/chat/completions',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${API_KEY}`,
                },
                body:JSON.stringify({
                    model:'gpt-4',
                    message: [{role:'user', content:mytext}],
                    tempature:1.0,
                    top_p:1.0,
                    n:1,
                    stream:false,
                    presence_penalty:0.0,
                    frequency_penalty:0.0,
                }),
            });

            if(response.ok){
                const data = await response.json();
                responseTextarea.value = data.choices[0].message.content;
            }
            else{
                responseTextarea.vaule =  'Error: unable to connect to API' 
            }
            print("success");
        }catch(err){
            console.error(err);
            responseTextarea.value = 'Error: something went wrong';
        }
    }
});
