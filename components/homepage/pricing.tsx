/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XUuF4DI1HKX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pricing</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Choose the plan that best fits your needs. No hidden fees, ever.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-background p-6 space-y-4 border border-input">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for individuals or small teams.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-primary p-6 space-y-4 border border-primary">
            <CardHeader>
              <CardTitle className="text-primary-foreground">Pro</CardTitle>
              <CardDescription className="text-primary-foreground">For growing teams and businesses.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2 text-primary-foreground">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-sm">/month</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="bg-background p-6 space-y-4 border border-input">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Tailored solutions for large organizations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}