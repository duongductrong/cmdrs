import { Config } from "tailwindcss";
import twAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export const extendColors = {
  "bg-subtle": "var(--bg-subtle)",
  "bg-subtle-hover": "var(--bg-subtle-hover)",
  "bg-subtle-pressed": "var(--bg-subtle-pressed)",
  "bg-base": "var(--bg-base)",
  "bg-base-hover": "var(--bg-base-hover)",
  "bg-base-pressed": "var(--bg-base-pressed)",
  "bg-component": "var(--bg-component)",
  "bg-component-hover": "var(--bg-component-hover)",
  "bg-component-pressed": "var(--bg-component-pressed)",
  "bg-field": "var(--bg-field)",
  "bg-field-hover": "var(--bg-field-hover)",
  "bg-field-component": "var(--bg-field-component)",
  "bg-field-component-hover": "var(--bg-field-component-hover)",
  "bg-switch-off": "var(--bg-switch-off)",
  "bg-switch-off-hover": "var(--bg-switch-off-hover)",
  "bg-disabled": "var(--bg-disabled)",
  "bg-overlay": "var(--bg-overlay)",
  "bg-highlight": "var(--bg-highlight)",
  "bg-highlight-hover": "var(--bg-highlight-hover)",
  "bg-interactive": "var(--bg-interactive)",

  "fg-base": "var(--fg-base)",
  "fg-subtle": "var(--fg-subtle)",
  "fg-muted": "var(--fg-muted)",
  "fg-disabled": "var(--fg-disabled)",
  "fg-on-color": "var(--fg-on-color)",

  "border-base": "var(--border-base)",
  "border-strong": "var(--border-strong)",
  "border-interactive": "var(--border-interactive)",
  "border-error": "var(--border-error)",
  "border-danger": "var(--border-danger)",
  "border-transparent": "var(--border-transparent)",
  "border-menu-top": "var(--border-menu-top)",
  "border-menu-bot": "var(--border-menu-bot)",

  "button-inverted": "hsl(var(--button-inverted))",
  "button-inverted-hover": "hsl(var(--button-inverted-hover))",
  "button-inverted-pressed": "hsl(var(--button-inverted-pressed))",
  "button-neutral": "hsl(var(--button-neutral))",
  "button-neutral-hover": "hsl(var(--button-neutral-hover))",
  "button-neutral-pressed": "hsl(var(--button-neutral-pressed))",
  "button-danger": "hsl(var(--button-danger))",
  "button-danger-hover": "hsl(var(--button-danger-hover))",
  "button-danger-pressed": "hsl(var(--button-danger-pressed))",
  "button-transparent": "hsla(var(--button-transparent))",
  "button-transparent-hover": "hsla(var(--button-transparent-hover))",
  "button-transparent-pressed": "hsla(var(--button-transparent-pressed))",

  "contrast-fg-primary": "var(--contrast-fg-primary)",
  "contrast-fg-secondary": "var(--contrast-fg-secondary)",
  "contrast-bg-base": "var(--contrast-bg-base)",
  "contrast-bg-base-hover": "var(--contrast-bg-base-hover)",
  "contrast-bg-base-pressed": "var(--contrast-bg-base-pressed)",
  "contrast-bg-subtle": "var(--contrast-bg-subtle)",
  "contrast-border-base": "var(--contrast-border-base)",
  "contrast-border-top": "var(--contrast-border-top)",
  "contrast-border-bot": "var(--contrast-border-bot)",

  "tag-neutral-text": "var(--tag-neutral-text)",
  "tag-neutral-icon": "var(--tag-neutral-icon)",
  "tag-neutral-border": "var(--tag-neutral-border)",
  "tag-neutral-bg": "var(--tag-neutral-bg)",
  "tag-neutral-bg-hover": "var(--tag-neutral-bg-hover)",

  "tag-blue-text": "var(--tag-blue-text)",
  "tag-blue-icon": "var(--tag-blue-icon)",
  "tag-blue-border": "var(--tag-blue-border)",
  "tag-blue-bg": "var(--tag-blue-bg)",
  "tag-blue-bg-hover": "var(--tag-blue-bg-hover)",

  "tag-purple-text": "var(--tag-purple-text)",
  "tag-purple-icon": "var(--tag-purple-icon)",
  "tag-purple-border": "var(--tag-purple-border)",
  "tag-purple-bg": "var(--tag-purple-bg)",
  "tag-purple-bg-hover": "var(--tag-purple-bg-hover)",

  "tag-green-text": "var(--tag-green-text)",
  "tag-green-icon": "var(--tag-green-icon)",
  "tag-green-border": "var(--tag-green-border)",
  "tag-green-bg": "var(--tag-green-bg)",
  "tag-green-bg-hover": "var(--tag-green-bg-hover)",

  "tag-orange-text": "var(--tag-orange-text)",
  "tag-orange-icon": "var(--tag-orange-icon)",
  "tag-orange-border": "var(--tag-orange-border)",
  "tag-orange-bg": "var(--tag-orange-bg)",
  "tag-orange-bg-hover": "var(--tag-orange-bg-hover)",

  "tag-red-text": "var(--tag-red-text)",
  "tag-red-icon": "var(--tag-red-icon)",
  "tag-red-border": "var(--tag-red-border)",
  "tag-red-bg": "var(--tag-red-bg)",
  "tag-red-bg-hover": "var(--tag-red-bg-hover)",
};

export const withCmds: (extendConfig: Config) => Config = (extendConfig) => {
  return {
    ...extendConfig,
    darkMode: "class",
    content: [
      ...(Array.isArray(extendConfig?.content) ? extendConfig?.content : []),
      "./src/**/*.{tsx,ts}",
      "./index.html",
      "node_modules/@cmds/ui/**/*.tsx",
    ],
    theme: {
      extend: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        colors: {
          ...extendColors,
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [...createPreset(), ...(extendConfig?.plugins || [])],
  };
};

export const createPreset = () => {
  return [
    plugin(function ({ addComponents }) {
      addComponents({
        ".cc": {
          backgroundColor: "black",
          color: "black",
        },
      });
    }),
    twAnimate,
  ];
};

export default {};
