/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cKT1ZKe0xZQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-foreground text-center">Customer Reviews</h2>
      <div className="grid gap-8">
        <div className="flex gap-4 border rounded-lg p-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-medium">John Doe</div>
              <div className="flex items-center gap-1 text-primary">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              "The product is amazing! It has exceeded all my expectations. The\n quality is top-notch and it has made
              my life so much easier."
            </p>
          </div>
        </div>
        <div className="flex gap-4 border rounded-lg p-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-medium">Sarah Anderson</div>
              <div className="flex items-center gap-1 text-primary">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              "I'm absolutely in love with this product. The design is\n beautiful, and it's been a game-changer for my
              daily routine.\n Highly recommended!"
            </p>
          </div>
        </div>
        <div className="flex gap-4 border rounded-lg p-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-medium">Emily Martinez</div>
              <div className="flex items-center gap-1 text-primary">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5 text-muted-foreground" />
                <StarIcon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              "I've been using this product for a few weeks now, and it's been\n a great addition to my daily routine.
              The only downside is that\n it can be a bit tricky to set up, but once you get the hang of\n it, it's a
              breeze to use."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}