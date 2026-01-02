import { Parallax } from "react-scroll-parallax";
import "./ParallaxTimeLine.css";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
};


const timelineData: TimelineItem[] = [
  {
    date: "22/06/2025",
    title: "CIA",
    description:
        "Nosso primeiro dia juntos, tenho um carinho enorme por esse dia, desde o início gostei muito de você, foi um dia incrível!!",
    imageUrl: "./cia.jpeg",
  },
  {
    date: "26/06/2025",
    title: "22 aninhos da Raissinha!!",
    description: 
        "No seu aniversário, mandei parabéns e te chamei pra ir pra festa junina dos meus amigos comigo!!",
    imageUrl: "./22raissa.png",
  },
  {
    date: "28/06/2025",
    title: "Festa junina",
    description:
      "A festa junina dos meus amigos foi super legal, nos divertimos, bebemos, dançamos, ficamos juntos e conversamos bastante, acho que eu já tava começando a ficar meio apaixonadinho.",
    imageUrl: "./gabieraissa.jpeg",
  },
  {
    date: "05/07/2025",
    title: "Festa junina dos seus amigos",
    description:
      "Depois da festa junina, você me chamou pra festa junina dos seus amigos, que me receberam muito bem, nos divertimos muito.",
    imageUrl: "./fjsuper.jpeg",
  },
    {
    date: "05/07/2025 - 21/07/2025",
    title: "Outback, cinema, açaí, sushi...",
    description:
      "Depois das festas juninas, não nos desgrudamos, arrumando desculpa pra se ver e conhecendo as famílias oficialmente.",
    imageUrl: "./desenho.jpeg",
  },
  {
    date: "22/07/2025",
    title: "Rio de Janeiro",
    description:
      "Foi uma viagem muito boa, onde nós pudemos nos aproximar muito rápido, e nos tornar muito mais íntimos, saudades inclusive.",
    imageUrl: "./rio.jpeg",
  },
  {
    date: "31/07/2025",
    title: "O pedido de namoro",
    description:
      "Depois de voltarmos da viagem, fiz o meu máximo pra oficializar a nossa relação o mais rápido possível",
    imageUrl: "./pedido.jpeg",
  },
  {
    date: "16/08/2025",
    title: "Futmesa do Murta",
    description:
        "Foi um dia muito legal, nos divertimos demais, bebemos além da conta, dormimos no rafinha.",
    imageUrl: "./grude.jpeg",
  },
  {
    date: "26/10/2025",
    title: "Campeão mineiro ossaaa",
    description:
      "Peguei essa data, pra representar e agradecer por todo apoio que você me dá, e por se importar e fazer questão das coisas que eu gosto.",
    imageUrl: "./mineiro.jpeg",
  },
  {
    date: "27/10/2025",
    title: "21 aninhos",
    description:
      "Não era grande fã do meu aniversário, mas você fez esse ser o melhor da minha vida, me senti muito amado em te ver tão empenhada em me fazer feliz e tornar essa data especial pra mim!!",
    imageUrl: "./21anos.jpeg",
  },
  {
    date: "23/12/2025 - 25/12/2025",
    title: "Natal",
    description:
      "Nosso primeiro natal juntinhos, meus pais viajaram, fizemos risoto, maminha, fomos pra sua tia, ficamos juntinhos e fui muito feliz!",
    imageUrl: "./natal.jpeg",
  },
    {
    date: "27/12/2025 - 03/01/2026",
    title: "Ano novo :(",
    description:
      "Passamos ano novo separados, pq vc já tinha fechado a viagem, foi terrível odiei.",
    imageUrl: "./anonovo.jpeg",
  },
      {
    date: "31/12/2025",
    title: "5 meses de Raissinha e Vivito",
    description:
      "5 meses desde que começamos a namorar, obrigado por todos os momentos felizes, por ser compreensível quando nos desentendemos e por me amar e apoiar sempre. Te admiro, sou apaixonado com você e estou ansioso por tudo que ainda temos a construir.",
    imageUrl: "5meses.jpeg",
  },
];

export function ParallaxTimeline() {
  return (
    <section className="timeline-container">
      <div className="timeline-line" />

      {timelineData.map((item, index) => (
        <div key={index} className="timeline-wrapper">
          <Parallax speed={-15}>
            <div className="image-container">
              <img src={item.imageUrl} alt={item.title} />
            </div>
          </Parallax>

          <Parallax speed={5}>
            <div className="timeline-card">
              <span className="date">{item.date}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Parallax>
        </div>
      ))}

        <div className="timeline-continues">
            <span />
            <span />
            <span />
        </div>
    </section>
  );
}
