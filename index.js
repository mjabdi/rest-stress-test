const request = require('request');

async function run()
{
    var i = 1;
    for (i = 1 ; i < 100000; i++)
    {
        request.post('http://localhost:3000/api/sendtobank', {
            json : {
                bank : 'BSIR',
                payload : 'message content : ' + i
            }
        }, callback);

        await sleep(1);
        
    }
}

let counter = 0;

function callback(error, res, body)  {

    counter++;

    if (error) {
      console.error(error)
      return
    }
    if (counter % 1000 == 0)
    {
        console.log(`${counter} : statusCode: ${res.statusCode}`)
        console.log(body)
    }
  }

  function sleep(ms){
        return new Promise(resolve  =>  {
            setTimeout(resolve,ms)
        })
    }

run();