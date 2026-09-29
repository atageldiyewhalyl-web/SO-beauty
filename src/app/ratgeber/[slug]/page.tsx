import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Fragment } from "react";
import { ArrowUpRight } from "../../components/ArrowUpRight";
import { MobileBookingAction } from "../../components/MobileBookingAction";
import { Reveal } from "../../components/Reveal";
import { SoFooter } from "../../components/SoFooter";
import { SoHeader } from "../../components/SoHeader";
import { WhatsAppIcon } from "../../components/WhatsAppIcon";
import { whatsappUrl } from "../../treatments";
import { articles, getArticle } from "../articles";
import { siteUrl } from "../../site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.shortTitle,
    description: article.description,
    alternates: { canonical: `/ratgeber/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.description, url: `/ratgeber/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/ratgeber/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    inLanguage: "de",
    datePublished: article.updatedIso,
    dateModified: article.updatedIso,
    author: { "@type": "Organization", name: "S&O Beauty Salon" },
    publisher: { "@id": `${siteUrl}/#salon` },
    mainEntityOfPage: `${siteUrl}/ratgeber/${article.slug}`,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${siteUrl}/ratgeber` },
      { "@type": "ListItem", position: 3, name: article.shortTitle, item: `${siteUrl}/ratgeber/${article.slug}` },
    ],
  };
  const faqJsonLd = article.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${siteUrl}/ratgeber/${article.slug}#faq`,
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;
  const jsonLd = [articleJsonLd, breadcrumbJsonLd, faqJsonLd].filter(Boolean);

  return (
    <>
      <Script
        id={`guide-jsonld-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Reveal />
      <SoHeader whatsappUrl={whatsappUrl} />
      <main className="guide-article-page">
        <article>
          <header className="guide-article-hero rose-shell">
            <nav aria-label="Brotkrümelnavigation"><Link href="/">Startseite</Link><span>/</span><Link href="/ratgeber">Ratgeber</Link></nav>
            <p>{article.category}</p>
            <h1>{article.title}</h1>
            <div className="guide-article-deck">
              <p>{article.intro}</p>
              <dl><div><dt>Lesezeit</dt><dd>{article.readingTime}</dd></div><div><dt>Aktualisiert</dt><dd>{article.updated}</dd></div></dl>
            </div>
          </header>

          <div className="guide-article-layout rose-shell">
            <aside>
              <p>In diesem Artikel</p>
              <nav aria-label="Artikelinhalt">
                {article.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}
              </nav>
            </aside>
            <div className="guide-article-body">
              {article.sections.map((section, index) => (
                <Fragment key={section.id}>
                  <section id={section.id}>
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                  </section>
                  {index === 1 && (
                    <aside className="guide-service-cta" data-guide-service-cta>
                      <Link href={article.primaryService.href}>
                        {article.primaryService.label}
                        <ArrowUpRight />
                      </Link>
                    </aside>
                  )}
                </Fragment>
              ))}
              <aside className="guide-note">
                <strong>Wichtig</strong>
                <p>Dieser Ratgeber ersetzt keine medizinische Beratung. Bei Erkrankungen, Medikamenten, starken oder anhaltenden Hautreaktionen sollte die Situation ärztlich abgeklärt werden.</p>
              </aside>
              {article.faq && (
                <section className="guide-faq" id="faq">
                  <h2>Häufige Fragen</h2>
                  <div>
                    {article.faq.map((item) => (
                      <article key={item.question}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>
              )}
              <section className="guide-sources">
                <h2>Quellen und weiterführende Informationen</h2>
                <ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight /></a></li>)}</ul>
              </section>
            </div>
          </div>
        </article>

        <section className="guide-related rose-shell">
          <h2>Passend dazu</h2>
          <div>{article.related.map((item) => <Link href={item.href} key={item.href}><span>{item.label}</span><ArrowUpRight /></Link>)}</div>
        </section>
        <section className="guide-article-close">
          <div className="rose-shell">
            <p>Sie möchten wissen, was für Ihre Haut passt?</p>
            <h2>Persönlich statt pauschal.</h2>
            <a className="rose-button rose-button-paper" data-guide-whatsapp-cta href={whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="guide-whatsapp-icon" />
              Termin über WhatsApp anfragen
              <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>
      <SoFooter />
      <MobileBookingAction whatsappUrl={whatsappUrl} />
    </>
  );
}
