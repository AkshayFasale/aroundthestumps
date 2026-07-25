import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/layout/Section";

export default function HomePage() {
  return (
    <PageWrapper>
      <Header />

      <Section>
        <Container>
          <h1 className="text-5xl font-bold">Around the Stumps</h1>

          <p className="mt-4 text-zinc-400">Premium Cricket Experience</p>
        </Container>
      </Section>
    </PageWrapper>
  );
}
