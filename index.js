const request = require('request');

async function run()
{
    var i = 1;
    for (i = 1 ; i < 100000; i++)
    {
        request.post('http://wsserver.nps-osh-xmaster.iranet.net/api/sendtobank', {
            json : {
                bank : 'MELI',
                payload : 'message content : ' + i
            }
        }, callback);

        await sleep(1);
        
    }
}

function callback(error, res, body)  {
    if (error) {
      console.error(error)
      return
    }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
  }

  function sleep(ms){
        return new Promise(resolve  =>  {
            setTimeout(resolve,ms)
        })
    }

run();