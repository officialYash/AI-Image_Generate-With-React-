export async function GET(request: Request) {
    //Connect to our Microsoft Azure Function
    const response = await fetch('....',{
        cache:'no-store'
    })

    const TextData = await response.text();  
    return new Response(JSON.stringify(TextData.trim()),{
        status:200,
    });
  }
  