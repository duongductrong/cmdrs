import { Config } from "tailwindcss";
import twAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export const withcmdrs: (extendConfig: Config) => Config = (extendConfig) => {
  return {
    ...extendConfig,
    darkMode: "class",
    content: [
      ...(Array.isArray(extendConfig?.content) ? extendConfig?.content : []),
      "node_modules/@cmdrs/ui/**/*.tsx",
      "./index.html",
      "./src/**/*.{tsx,jsx,ts,js,html}",
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
        fontSize: {
          "2xs": "0.8125rem",
        },
        colors: {
          "button-glossed": "hsl(var(--button-glossed))",
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
          "button-transparent-pressed":
            "hsla(var(--button-transparent-pressed))",

          fg: {
            base: "hsl(var(--fg-base))",
            inverted: "hsl(var(--fg-inverted))",
            muted: "hsl(var(--fg-muted))",
            subtle: "hsl(var(--fg-subtle))",
            interactive: "hsl(var(--fg-interactive))",
            "on-interactive": "hsl(var(--fg-on-interactive))",
          },

          bg: {
            base: {
              DEFAULT: "hsl(var(--bg-base))",
              hover: "hsl(var(--bg-base-hover))",
            },
            subtle: "hsl(var(--bg-subtle))",
            // component: { -> bg-card instead
            //   DEFAULT: "hsl(var(--bg-component))",
            //   hover: "hsl(var(--bg-component-hover))",
            // },
            input: {
              DEFAULT: "hsl(var(--bg-input))",
              hover: "hsl(var(--bg-input-hover))",
              component: {
                DEFAULT: "hsl(var(--bg-input-component))",
                hover: "hsl(var(--bg-input-component-hover))",
              },
            },
            switch: {
              off: "hsl(var(--bg-switch-off))",
              "off-hover": "hsl(var(--bg-switch-off-hover))",
            },
          },

          border: "hsl(var(--border))",

          ring: "hsl(var(--ring))",

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
            hover: "hsl(var(--card-hover))",
            foreground: "hsl(var(--card-foreground))",
          },
          accordion: {},
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
        boxShadow: {
          input: "var(--bg-input-shadow)",
          section: "var(--section-shadow)",
          border: "var(--section-border)",
          accordion: "var(--accordion-shadow-border)",
          sidebar: "var(--sidebar-shadow-border)",
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
      addComponents({});
    }),
    twAnimate,
  ];
};

export default {};
