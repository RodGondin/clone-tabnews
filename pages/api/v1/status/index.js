function status(request, response) {
  response.status(200).json("Testando o json do response");
}

export default status;
