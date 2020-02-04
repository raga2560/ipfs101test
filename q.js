const IPFS = require('ipfs') 
const { globSource } = IPFS

async function main () {
  const node = await IPFS.create()
  const version = await node.version()

  console.log('Version:', version.version)


  try {
/*
  const filesAdded = await node.add([{
    path: '/tmp/hello.txt',
    content: 'Hello World 101'
  }])
*/
	  
	  const files = [{
  path: '/tmp/myfile.txt',
  content: 'ABC'
}]

 // console.log('Added file:', JSON.stringify(filesAdded));
	  for await (const result of node.add(files)) {
  console.log(JSON.stringify(result))
   console.log('Added file:', result.path, result.cid.toString())
  //console.log(result)
  }


  // console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)
	 } catch( err)  {

  console.log('Err :'+ err );
		   }
  // ...
}

main()
