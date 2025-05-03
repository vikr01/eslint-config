type Params = Readonly<{ tsConfigPath: string | undefined }>;

const createConfig = ({ tsConfigPath }: Params) => ({
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parserOptions: {
      project: [tsConfigPath as string],
    },
  },
});

export default createConfig;
