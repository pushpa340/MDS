
import { Users2, Check, Search, Target, Award, UserCheck, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MotionWrapper } from '@/components/ui/motion-wrapper';

export default function HiringTalentServicesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <MotionWrapper>
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
              <Users2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Hiring Talent Services
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-xl text-muted-foreground">
            Find the Right Talent. Power Your Data Vision.
          </p>
        </MotionWrapper>
      </header>
      
      <MotionWrapper delay={0.4}>
        <section className="mb-16">
          <Image
            src="/services-icon/8.avif"
            alt="Team of professionals in a meeting"
            width={1200}
            height={200}
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="team meeting"
          />
        </section>
      </MotionWrapper>

      <section className="mb-16">
         <MotionWrapper>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Your transformation journey needs more than technology—it needs the right people.</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Our Hiring Talent Services connect you with highly skilled professionals in data, cloud, and AI, ready to integrate into your team and accelerate success.
                    </p>
                </CardContent>
            </Card>
        </MotionWrapper>
      </section>


      <section className="mb-16 bg-muted p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <MotionWrapper>
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Search className="h-8 w-8 text-primary" />
                            <CardTitle>What We Offer</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground"><b>Specialized Talent Pools:</b> Experts in Microsoft Fabric, GCP, Azure, AI/ML, Data Engineering, and Data Science.</span></li>
                            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground"><b>Flexible Hiring Models:</b> Contract, full-time, remote, hybrid, or on-site — scale your team as your needs evolve.</span></li>
                            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground"><b>Global Reach, Local Impact:</b> Access pre-vetted candidates from across the globe, aligned to your region and industry.</span></li>
                            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground"><b>End-to-End Recruitment:</b> From sourcing to onboarding, we handle everything — saving your team time and effort.</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </MotionWrapper>
            <MotionWrapper>
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Target className="h-8 w-8 text-primary" />
                            <CardTitle>Why Choose Our Talent Services?</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">Deep understanding of tech stack & domain needs.</span></li>
                            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">Fast turnaround with ready-to-deploy experts.</span></li>
                            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">Focus on retention, culture fit, and technical excellence.</span></li>
                            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">Access to MDS’s training, certification, and upskilling programs.</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </MotionWrapper>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start">
             <MotionWrapper>
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Award className="h-8 w-8 text-primary" />
                            <CardTitle>Talent Roles We Specialize In</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 columns-1 sm:columns-2">
                            <li className="flex items-start"><UserCheck className="h-5 w-5 text-primary/80 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">Data Engineers & Cloud Architects</span></li>
                            <li className="flex items-start"><UserCheck className="h-5 w-5 text-primary/80 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">Data Scientists & AI/ML Engineers</span></li>
                            <li className="flex items-start"><UserCheck className="h-5 w-5 text-primary/80 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">BI Developers (Power BI, Looker)</span></li>
                            <li className="flex items-start"><UserCheck className="h-5 w-5 text-primary/80 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">DevOps & MLOps Professionals</span></li>
                            <li className="flex items-start"><UserCheck className="h-5 w-5 text-primary/80 mr-2 mt-1 flex-shrink-0" /><span className="text-muted-foreground">Project Managers & Tech Leads</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </MotionWrapper>
             <MotionWrapper>
                <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                            <CardTitle>Client Testimonial</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                            “Thanks to MDS Hiring Talent Services, we onboarded highly skilled data engineers in record time. They became productive from day one and have been instrumental in our cloud modernization efforts.”
                        </blockquote>
                        <p className="text-right mt-4 font-semibold text-muted-foreground">— Director of Data, Healthcare Tech Firm</p>
                    </CardContent>
                </Card>
            </MotionWrapper>
        </div>
      </section>

      <MotionWrapper>
        <section className="text-center bg-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Find Your Next Tech Hire With Us</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to build a stronger team? Contact us to discuss your hiring needs and find the perfect talent for your projects.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Find Talent Now</Link>
          </Button>
        </section>
      </MotionWrapper>
    </div>
  );
}
