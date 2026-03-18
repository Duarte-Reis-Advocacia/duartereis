-- Create articles table
CREATE TABLE public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL DEFAULT 'Direito Trabalhista',
  status TEXT NOT NULL DEFAULT 'rascunho' CHECK (status IN ('rascunho', 'publicado')),
  summary TEXT,
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Public can read published articles
CREATE POLICY "Artigos publicados são públicos"
  ON public.articles FOR SELECT
  USING (status = 'publicado');

-- Authenticated users can do everything
CREATE POLICY "Admin pode selecionar tudo"
  ON public.articles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin pode inserir"
  ON public.articles FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admin pode atualizar"
  ON public.articles FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Admin pode deletar"
  ON public.articles FOR DELETE
  TO authenticated
  USING (true);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.update_articles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_articles_updated_at();

-- Seed existing articles
INSERT INTO public.articles (title, slug, category, status, summary, content) VALUES
(
  'Acidente de Trabalho: Entenda seus Direitos e Como Agir',
  'acidente-de-trabalho-entenda-seus-direitos',
  'Direito Trabalhista',
  'publicado',
  'Saiba o que fazer imediatamente após um acidente, quais documentos reunir e quais indenizações você pode ter direito.',
  E'Acidentes de trabalho são eventos que, infelizmente, ocorrem com mais frequência do que se imagina no Brasil. De acordo com dados do Observatório de Segurança e Saúde no Trabalho, o país registra centenas de milhares de notificações por ano.\n\nSe você sofreu um acidente de trabalho, é fundamental conhecer seus direitos. A legislação brasileira prevê uma série de proteções ao trabalhador acidentado, incluindo estabilidade no emprego, benefícios previdenciários e direito à indenização.\n\nO primeiro passo é comunicar imediatamente ao empregador e solicitar a emissão da CAT (Comunicação de Acidente de Trabalho). Este documento é essencial para garantir seus direitos junto ao INSS e na Justiça do Trabalho.\n\nO trabalhador acidentado tem direito a: auxílio-doença acidentário (B91), estabilidade de 12 meses após a alta médica, indenização por danos materiais, morais e estéticos, pensão vitalícia em caso de incapacidade permanente, e reembolso de despesas médicas.\n\nÉ importante reunir toda a documentação possível: laudos médicos, exames, fotos do local do acidente, testemunhos e qualquer comunicação com o empregador. Quanto mais provas, mais forte será o seu caso.\n\nNa Duarte Reis, contamos com mais de 25 anos de experiência em casos de acidente de trabalho. Nossa equipe analisa cada caso com profundidade e traça a melhor estratégia jurídica para garantir a reparação integral dos danos sofridos.'
),
(
  'Estabilidade da Gestante: O que a Lei Garante Mesmo Sem Comunicação ao Empregador',
  'estabilidade-da-gestante-o-que-a-lei-garante',
  'Direito Trabalhista',
  'publicado',
  'A estabilidade gestacional é um direito irrenunciável. Entenda como ela funciona e o que fazer se for violada.',
  E'A estabilidade da gestante é um dos direitos mais importantes garantidos pela Constituição Federal e pela CLT. Ela protege a trabalhadora contra demissão sem justa causa desde a confirmação da gravidez até cinco meses após o parto.\n\nUm aspecto fundamental que muitos desconhecem: a estabilidade é garantida mesmo que a gestante não tenha comunicado a gravidez ao empregador no momento da demissão. O Tribunal Superior do Trabalho (TST) tem entendimento consolidado nesse sentido.\n\nSe a trabalhadora foi demitida e só descobriu a gravidez depois, ou se não havia comunicado ao empregador, ela tem direito à reintegração ao emprego ou, caso a reintegração não seja viável, à indenização correspondente a todo o período de estabilidade.\n\nA indenização inclui: salários do período de estabilidade, 13º salário proporcional, férias proporcionais com 1/3, FGTS com multa de 40%, e demais benefícios que a trabalhadora teria direito durante o período.\n\nÉ fundamental agir rapidamente. Embora o direito exista, a busca pela reintegração ou indenização deve ser feita dentro dos prazos legais. Procure um advogado trabalhista assim que tomar conhecimento da situação.\n\nA Duarte Reis tem vasta experiência na defesa dos direitos das gestantes. Analisamos cada caso individualmente e buscamos a solução mais favorável, seja pela via judicial ou por acordo extrajudicial.'
),
(
  'Horas Extras Não Pagas: Como Calcular e Quando Entrar com Ação',
  'horas-extras-nao-pagas-como-calcular',
  'Direito Trabalhista',
  'publicado',
  'Descubra como identificar se você tem valores a receber e qual o prazo para reivindicá-los na Justiça do Trabalho.',
  E'As horas extras não pagas representam uma das violações trabalhistas mais comuns no Brasil. Muitos trabalhadores sequer sabem que possuem valores expressivos a receber por horas trabalhadas além da jornada contratual.\n\nA CLT determina que a jornada normal de trabalho é de 8 horas diárias e 44 horas semanais. Todo trabalho excedente deve ser remunerado com acréscimo de, no mínimo, 50% sobre o valor da hora normal. Em domingos e feriados, o acréscimo é de 100%.\n\nAlém das horas extras propriamente ditas, outros direitos frequentemente descumpridos incluem: intervalo intrajornada (mínimo de 1 hora para jornadas acima de 6 horas), intervalo interjornada (mínimo de 11 horas entre jornadas), adicional noturno (20% para trabalho entre 22h e 5h), e hora noturna reduzida (52 minutos e 30 segundos).\n\nAs horas extras geram reflexos em diversas parcelas: 13º salário, férias com 1/3, FGTS, aviso prévio e descanso semanal remunerado. Por isso, o valor total a receber pode ser significativamente maior do que se imagina.\n\nO prazo para reclamar horas extras na Justiça do Trabalho é de 2 anos após o fim do contrato de trabalho, podendo ser cobradas as horas dos últimos 5 anos. Não deixe esse prazo passar.\n\nNa Duarte Reis, realizamos o levantamento detalhado de todas as horas extras devidas, calculamos os reflexos em todas as parcelas e atuamos judicialmente para garantir o pagamento integral com juros e correção monetária.'
);