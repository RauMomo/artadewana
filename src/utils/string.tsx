export function extractPayload({params}: {params: string}) {
  var strings = params.split('=')
  return strings[1];
}