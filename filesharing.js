
const IPFS = require('ipfs');
dirshared = require('./shared.json');

function paidrepo () {
  return dirshared[0];
}

const node = new IPFS({
  repo: paidrepo(),
})

async function main() {
 try {

  const filesAdded = await node.add([{
    path: '/tmp/hello.txt',
    content: 'Hello World 101'
  }])

/*
          const files = [{
  path: '/tmp/myfile.txt',
  content: 'ABC'
}]
*/
  console.log('Added file:', JSON.stringify(filesAdded));
	 /*
          for await (const result of node.add(files)) {
  console.log(JSON.stringify(result))
   console.log('Added file:', result.path, result.cid.toString())
  //console.log(result)
  }


  // console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)
	 // */
         } catch( err)  {

  console.log('Err :'+ err );
                   }


}

main();


