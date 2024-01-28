function About(req, res) {
  res.send(`hello about: ${req.params.id}`);
}

export default About;