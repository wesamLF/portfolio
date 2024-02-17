export type variantProps = "react" | "tailwind" | "bulma" | "strapi" | "express" | "SQLite" | "ts" | "js" | "shadcn"
const Badge = ({ name, variant }: { name: string, variant: variantProps }) => {

  // i could use some libraries such as "class-variance-authority" to make it cleaner and easier, but i want to build
  // everything from scratch

  let variantStyle: string = ""
  switch (variant) {
    case "react":
      variantStyle = "bg-blue-100 text-blue-800 "
      break
    case "tailwind":
      variantStyle = "bg-cyan-100 text-cyan-800 "
      break;
    case "bulma":
      variantStyle = "bg-emerald-200 text-emerald-800 "
      break;
    case "strapi":
      variantStyle = "bg-indigo-100 text-indigo-800 "
      break;
    case "express":
      variantStyle = "bg-gray-300 text-black "
      break;
    case "SQLite":
      variantStyle = "bg-sky-100 text-sky-800 "
      break;
    case "ts":
      variantStyle = "bg-blue-600 text-gray-200 "
      break;
    case "js":
      variantStyle = "bg-amber-300 text-black "
      break;
      case "shadcn":
      variantStyle = " border border-black bg-gray-300 text-black "
      break;
    default:
      variantStyle = "bg-blue-100 text-blue-800 "
      break;
  }
  return (
    <span
      className={`text-xs font-medium me-2 px-2.5 py-1 rounded ${variantStyle}`}>
      {name}
    </span>

  )
}

export default Badge