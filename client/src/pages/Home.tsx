import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Handshake, Mail, Linkedin, Youtube, BookOpen, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">D.K. Kim</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#expertise" className="text-sm hover:text-primary transition-colors">Expertise</a>
            <a href="#publications" className="text-sm hover:text-primary transition-colors">Publications</a>
            <a href="#insights" className="text-sm hover:text-primary transition-colors">Insights</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/trinos/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <Button asChild variant="default" size="sm">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Mediate with <br />
              <span className="text-primary">D.K. Kim</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Korea's First IMI Certified Mediator with 20+ Years of Cross-Sector Legal Experience
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">International Cross-Border Mediation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As Korea's first IMI Certified Mediator, D.K. Kim brings understanding-based, omni-partial mediation that adapts to commercial, emotional, and cultural contexts across borders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Commercial Dispute Resolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With 20+ years of experience in infrastructure, M&A, and finance, D.K. Kim helps parties find optimal solutions aligned with their true interests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl italic font-serif mb-4">
              "True resolution aligns interests, not just positions."
            </p>
            <footer className="text-lg opacity-90">— D.K. Kim</footer>
          </blockquote>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About D.K. Kim</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                D.K. Kim is Korea's first and only <strong className="text-foreground">IMI Certified Mediator and Mediation Advocate</strong>, with over 20 years of cross-sector legal experience. He passed the California Bar Exam (pending swearing-in), expanding his global legal capacity.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                As Co-Founder of <strong className="text-foreground">Trinos Strategy</strong>, a boutique advisory firm, D.K. Kim bridges law, finance, and strategy to help businesses, investors, and governments design resilient frameworks that prevent disputes and unlock sustainable growth.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Previously, he served as Head of Legal & Governance at <strong className="text-foreground">Macquarie Korea Asset Management</strong>, where he led legal strategy for infrastructure M&A, fund governance, and regulatory risk.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Years in Practice</div>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">IMI</div>
                <div className="text-sm text-muted-foreground">Certified Mediator</div>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">International Panels</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Current Positions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• International Mediator & Mediation Advocate (WIPO, SIMC, SCCA, QICCA, KCAB INTERNATIONAL)</li>
                  <li>• Director of the International Affairs Division, Korean Bar Association</li>
                  <li>• Instructor, Mediation & Negotiation Strategy, KCAB INTERNATIONAL ADR Program</li>
                  <li>• Advisory Board Member, InnovADR</li>
                  <li>• Co-Founder, Trinos Strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-secondary/20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Areas of Expertise</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              "Joint Venture & Shareholder Disputes",
              "Infrastructure & PPP Conflicts",
              "Investor-State Disputes (ISDS)",
              "Private Equity & M&A Disputes",
              "Project Finance & Regulatory Conflicts",
              "Cross-Border Commercial Mediation"
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="font-semibold">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-6">Selected Mediation Experience</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Mediated PPP infrastructure dispute involving provincial government and private concessionaire</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Resolved listed-company shareholder governance conflict with multiple parties</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Advised Korean LP in dispute with UK fund manager over asset exit and fund dissolution</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Represented Korean development bank in French maritime conciliation proceedings</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Publications & Scholarship</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Interpretation of the earn-out clause in M&A contract",
                journal: "선진상사법률",
                year: "2024",
                link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003134834"
              },
              {
                title: "Investor-State Dispute Settlement and International Mediation",
                journal: "통상법률 제161호",
                year: "2023",
                link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003025797"
              },
              {
                title: "The issues and resolutions regarding local government's moratorium and public interest disposition",
                journal: "선진상사법률",
                year: "2023",
                link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002929529"
              },
              {
                title: "The Effectiveness and Supplementation of International Commercial Mediation",
                journal: "The Justice (Vol. 193), Korean Society of Law",
                year: "2022",
                link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002903486"
              },
              {
                title: "A Study on the Efficiency of the Settlement by ICSID",
                journal: "International Trade Law (Vol. 106)",
                year: "2012",
                link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001686229"
              }
            ].map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{pub.journal}</p>
                      <p className="text-sm text-muted-foreground">{pub.year}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Card className="bg-secondary/30">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Books & Recent Papers</h3>
                <p className="text-muted-foreground">Coming Soon</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-secondary/20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Insights & Thought Leadership</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">협상, 조정, 외교의 세계</h3>
                <p className="text-sm text-muted-foreground mb-4">Weekly insights on negotiation, mediation, and diplomacy</p>
                <p className="text-xs text-muted-foreground mb-4">LinkedIn Newsletter • 566 subscribers</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://www.linkedin.com/newsletters/7344190870344126466/" target="_blank" rel="noopener noreferrer">
                    Read Newsletter
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">외교, 협상, 그리고 조정</h3>
                <p className="text-sm text-muted-foreground mb-4">Deep dives into international relations and conflict resolution</p>
                <p className="text-xs text-muted-foreground mb-4">Brunch • 9 episodes</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://brunch.co.kr/brunchbook/negosemi" target="_blank" rel="noopener noreferrer">
                    Read on Brunch
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Dispute Resolution</h3>
                <p className="text-sm text-muted-foreground mb-4">Case studies and analysis in dispute resolution</p>
                <p className="text-xs text-muted-foreground mb-4">Medium • English</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://medium.com/smart-dispute-resolution" target="_blank" rel="noopener noreferrer">
                    Read on Medium
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Video Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Youtube className="w-12 h-12 text-accent mb-4" />
                  <h4 className="text-lg font-bold mb-3">International Mediator Interviews</h4>
                  <p className="text-sm text-muted-foreground mb-4">Conversations with leading mediators worldwide</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.youtube.com/playlist?list=PLL9mSikZe4kzkOEPiTYgQIJSLJ31Y4svR" target="_blank" rel="noopener noreferrer">
                      Watch Playlist
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Youtube className="w-12 h-12 text-accent mb-4" />
                  <h4 className="text-lg font-bold mb-3">Mediation & Negotiation Insights</h4>
                  <p className="text-sm text-muted-foreground mb-4">Educational content on mediation practice</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.youtube.com/playlist?list=PLL9mSikZe4kxhfcxtq-drF_8IMpu78CqL" target="_blank" rel="noopener noreferrer">
                      Watch Playlist
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Testimonials & Recommendations</h2>
          
          {/* Featured Text Testimonials */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="p-8">
                <blockquote className="space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "DK is excellent in leading documentation, negotiation, and structuring across various investment opportunities for private equity funds and infra funds. He articulates clearly complex legal implication and related context with using vivid and accurate language, helping stakeholders come to appropriate conclusions timely."
                  </p>
                  <footer className="font-semibold">
                    — Jiho Ahn, Macquarie Asset Management
                  </footer>
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <blockquote className="space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "He is one of the most commercial lawyers from whom I have had the pleasure of receiving advice, and one of very few actually willing to search for constructive solutions. Unfortunately, this is a very rare attribute, especially in a legal regime such as Korea."
                  </p>
                  <footer className="font-semibold">
                    — Namsun Kim, Macquarie Asset Management
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Images Gallery */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Recommendations from Colleagues & Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'Namsun Kim', img: '1_NamsunKim.png' },
                { name: 'Jiho Ahn', img: '2_JihoAhn.jpg' },
                { name: 'JoongSub Shin', img: '3_JoongSubShin.png' },
                { name: 'Sean Jung', img: '4_SeanJung.png' },
                { name: 'Namwook Choi', img: '5_NamwookChoi.png' },
                { name: 'Jaewoo Jung', img: '6_JaewooJung.png' },
                { name: 'HyoYoung Kang', img: '7_HyoYoungKang.jpg' },
                { name: 'Jonghyek Park', img: '8_JonghyekPark.jpg' },
                { name: 'Johnno Kim', img: '9_JohnnoKim.jpg' },
                { name: 'Masao', img: '10_Masao.jpg' },
                { name: 'Soichiro', img: '11_Soichiro.jpg' },
                { name: 'Taehoon Kim', img: '12_TaehoonKim.jpg' },
                { name: 'Jeff Lu', img: '13_JeffLu.jpg' },
                { name: 'Chris Kang', img: '14_ChrisKang.jpg' },
                { name: 'Byungwoo Im', img: '15_ByungwooIm.jpg' },
                { name: 'Hyemin Park', img: '16_hyeminPark.jpg' },
                { name: 'Beumrae Kim', img: '17_BeumraeKIm.png' },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={`/testimonials/${testimonial.img}`} 
                    alt={`Testimonial from ${testimonial.name}`}
                    className="w-full h-auto object-cover"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to resolve your dispute through mediation? Let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a href="mailto:dkkim@swonlaw.com" className="flex items-center gap-2 text-lg hover:opacity-80 transition-opacity">
                <Mail className="w-5 h-5" />
                dkkim@swonlaw.com
              </a>
              <a href="https://www.linkedin.com/in/trinos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:opacity-80 transition-opacity">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </div>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <a href="mailto:dkkim@swonlaw.com">Send Email</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/30 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © D.K. Kim 2025 | All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/trinos/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://medium.com/smart-dispute-resolution" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Medium
              </a>
              <a href="https://brunch.co.kr/brunchbook/negosemi" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Brunch
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

