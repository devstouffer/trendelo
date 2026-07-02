import type { LessonContent } from "./types";

// ── Module 1 — AI & the Marketing Landscape (free tier) ──────────────────────

const module1: LessonContent[] = [
  {
    type: "read-reflect",
    lessonTitle: "The AI Shift in Marketing",
    cards: [
      {
        emoji: "📻",
        headline: "Marketing has always changed with its tools",
        body: "Print, TV, search, social — every era of marketing got reshaped by a new tool, and every time, the people who adapted fastest ended up defining what \"good marketing\" looked like for the next decade. AI is the current one: a shift in how the work gets done, not a replacement for the people doing it.\n\nThat's the lens this entire track uses. Rather than treating AI as some separate, futuristic category bolted onto marketing, we'll treat it the way marketers have always treated new tools — something to learn quickly, use well, and eventually take for granted. By the end of this module, the four areas below should feel less like buzzwords and more like a practical map of where your day-to-day work is already starting to shift.",
      },
      {
        emoji: "🧭",
        headline: "Four places AI shows up right now",
        body: "There are four places AI shows up in marketing work today, and it's worth knowing all four by name because they get confused constantly. Generative content covers drafting copy, images, and video — the most visible use, and the one most people mean when they say \"AI marketing.\" Predictive analytics is quieter: models that estimate who's likely to buy, who's likely to churn, and how much a customer is worth over time.\n\nAutomation handles the repetitive mechanical work — routing leads, scheduling posts, adjusting ad bids — freeing people from tasks that never needed a human's full attention in the first place. Personalisation ties it together, using behavioural data to tailor what each visitor or subscriber actually sees in real time. Trendelo walks through all four, not just the flashy one, because the biggest wins usually come from the parts nobody's talking about.",
      },
      {
        emoji: "✍️",
        headline: "Generative AI: the visible layer",
        body: "Large language models draft copy, brainstorm campaign angles, and summarise research in seconds — work that used to take a junior copywriter or strategist a good chunk of a day. Image and video generation models do the same for visuals, producing concept art, social graphics, and rough video cuts from nothing more than a text description.\n\nNone of this replaces the marketer's job so much as it relocates it. Less time gets spent staring at a blank page, and more time gets spent prompting clearly, reacting to drafts, and applying the judgment that decides whether a piece of copy or artwork is actually right for the brand. That shift — from producing to directing — is the throughline of this entire module.",
      },
      {
        emoji: "⚙️",
        headline: "The quieter layer: prediction and automation",
        body: "Behind the scenes, a second layer of AI is doing arguably more financial heavy lifting than the generative tools everyone talks about. Models score incoming leads by likelihood to convert, flag customers showing early signs of churn, and adjust ad bids hundreds of times a minute based on real-time signals about who's looking at what.\n\nThis layer is less visible because it doesn't produce anything you can screenshot — there's no flashy image or clever tagline to point to. But it often moves more actual revenue than content generation does, simply because it's operating continuously, at a scale and speed no team of humans could match, on decisions that directly affect spend and conversion.",
      },
      {
        emoji: "🎨",
        headline: "What doesn't change",
        body: "For all four of those areas, one thing stays constant: strategy, audience empathy, brand judgment, and knowing what \"good\" actually looks like remain entirely human calls. AI can execute faster once a direction is set, but it has no way to know whether that direction is the right one for your specific brand, audience, or moment.\n\nThis is the core idea Trendelo keeps coming back to across every track: AI gives you faster hands, not better taste. The marketers who get the most value out of these tools are the ones who already have a clear sense of what they're trying to say and to whom — AI just helps them say it faster, and test more versions of it, than they ever could alone.",
      },
    ],
    reflectPrompt: "Which of these four areas — content, prediction, automation, or personalisation — shows up most in a marketing job you know? Why?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🌐",
        prompt: "According to this lesson, AI in marketing is best understood as:",
        options: ["A completely new activity with no precedent", "An evolution of marketing, like earlier tool shifts (print, TV, search, social)", "A temporary fad", "A replacement for all marketing roles"],
        correctIndex: 1,
        explain: "The lesson frames AI as the current chapter in an ongoing pattern of marketing tools changing the job, not something unprecedented.",
      },
      {
        kind: "blank",
        emoji: "⚙️",
        sentence: "The 'quieter layer' of AI in marketing — prediction and automation — often has a bigger revenue impact despite being less ___ than generative content tools.",
        options: ["visible", "expensive", "accurate", "popular"],
        correctIndex: 0,
        explain: "Prediction and automation work behind the scenes, but often move more revenue than the more visible generative content layer.",
      },
      {
        kind: "choice",
        emoji: "🎨",
        prompt: "Per this lesson, what stays a human responsibility even as AI speeds up marketing work?",
        options: ["Typing speed", "Strategy, audience empathy, and brand judgment", "Software installation", "Server maintenance"],
        correctIndex: 1,
        explain: "AI is faster hands, not better taste — strategic and brand judgment calls remain human.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "Marketing Before and After Generative AI",
    cards: [
      {
        emoji: "📄",
        headline: "Before: the blank page problem",
        body: "A first draft of ad copy, a subject line, a campaign brief — all of it used to start from zero, and getting from nothing to something took real focused time. A junior copywriter might spend an hour just staring at a blank document before the first usable sentence showed up, and that hour was baked into every project timeline whether anyone liked it or not.\n\nMultiply that across dozens of assets a month, and the blank page wasn't just a creative hurdle — it was a real operational cost that shaped how much content a small team could realistically produce in a given quarter.",
      },
      {
        emoji: "⚡",
        headline: "After: drafting from a starting point",
        body: "Teams now generate a rough first pass in minutes and spend their time editing, fact-checking, and sharpening it instead. The work shifted from creation to curation — the blank page is gone, replaced by a decent-but-imperfect draft a human can react to immediately.\n\nThat's a meaningfully different skill than writing from scratch: it rewards people who can spot what's almost right and push it the rest of the way, rather than people who are simply fast typists.",
      },
      {
        emoji: "🗂️",
        headline: "Before: one-size segments",
        body: "Audiences were split into a handful of broad buckets — age, location, past purchase — because building and maintaining more segments by hand wasn't practical. A marketing team of five people simply didn't have the hours to track dozens of overlapping behavioural segments manually, so everyone got lumped into whichever bucket was closest, even when it wasn't a great fit.\n\nThat's part of why so much marketing used to feel generic: the targeting infrastructure genuinely couldn't support anything more precise, no matter how much a team wanted to personalise.",
      },
      {
        emoji: "🧩",
        headline: "After: dozens of live micro-segments",
        body: "Models can now maintain far more segments and update them in real time based on behaviour, not just a static profile filled out once. A single customer might move through several segments in one week — browsing one category, becoming price-sensitive after abandoning a cart, then showing high purchase intent after reading a review — and the system tracks all of it automatically.\n\nThat level of granularity used to require a dedicated data team; today it's closer to a default setting on most marketing platforms.",
      },
      {
        emoji: "⚠️",
        headline: "The catch",
        body: "Faster drafts and more segments only help if someone checks accuracy, tone, and whether the personalisation still feels respectful. Speed without oversight creates new risks: a draft that reads well can still contain a fabricated statistic, and a segment that's technically accurate can still feel invasive if it's built on the wrong kind of signal.\n\nWe'll cover both of these risks in real depth later in the track, but it's worth flagging early — every efficiency gain in this module comes with a corresponding new thing to watch for.",
      },
    ],
    reflectPrompt: "Think of one marketing task you do (or would do) that used to start from a blank page. How might a first AI draft change your role in that task?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🗂️",
        prompt: "Before generative AI, building more than a handful of audience segments by hand was mostly impractical. What changed this?",
        options: ["Models that can maintain many segments and update them in real time", "Cheaper printing costs", "Fewer available audiences", "Nothing changed"],
        correctIndex: 0,
        explain: "AI-driven segmentation can maintain and update far more segments in real time than manual processes ever could.",
      },
      {
        kind: "blank",
        emoji: "⚠️",
        sentence: "Faster AI drafts and more granular segments only help if someone provides ___ for accuracy, tone, and whether personalisation still feels respectful.",
        options: ["oversight", "more budget", "less time", "fewer tools"],
        correctIndex: 0,
        explain: "Speed without oversight creates new risks — someone still has to check the output.",
      },
      {
        kind: "choice",
        emoji: "✍️",
        prompt: "What does the lesson say shifted from 'creation' to 'curation'?",
        options: ["The marketer's role in producing first drafts", "The company's legal team", "The customer support department", "The finance department"],
        correctIndex: 0,
        explain: "As AI produces rough first drafts, the marketer's work shifts toward editing, fact-checking, and sharpening rather than starting from zero.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Your First AI Marketing Assistant",
    toolName: "Claude",
    toolUrl: "https://claude.ai",
    steps: [
      {
        title: "Open a chat and set the scene",
        body: "Start a new conversation and describe your situation in one or two sentences — your product, your audience, and what you actually need from the assistant. For example: \"I market a budget meal-kit subscription to busy parents; I need five Instagram caption ideas for a back-to-school promotion.\" That single sentence does more work than it looks like: it tells the assistant who it's writing for, what tone probably fits, and what format to produce, all before you've asked a single specific question.\n\nMost people skip this step and jump straight to \"write me a caption,\" which is exactly what produces the generic, forgettable output people complain about. The extra ten seconds spent setting the scene is the single highest-leverage habit in this entire walkthrough.",
        tip: "The more specific your context, the less generic the output.",
      },
      {
        title: "Ask for options, not a final answer",
        body: "Request multiple variations rather than one polished piece. Asking for \"5 short options in different tones\" produces a spread you can react to, instead of one draft you either have to accept wholesale or reject and start over. Comparing options side by side is also just an easier task than judging a single draft in isolation — you're choosing, not critiquing from scratch.\n\nThis is closer to how a creative director actually works with a copywriter: ask for range first, then narrow down, rather than demanding perfection on the first attempt.",
      },
      {
        title: "React and refine out loud",
        body: "Tell the assistant what's working and what isn't, in plain, specific language: \"Option 3 is close, but make it punchier and cut the exclamation point.\" Treat the exchange like giving notes to a junior copywriter, not like searching a database for the right answer — vague feedback like \"make it better\" produces vague revisions, while specific feedback about tone, length, or a particular phrase produces a specific fix.\n\nMost useful sessions take two or three rounds of this kind of back-and-forth, not one perfect prompt. Budgeting for that upfront saves the frustration of expecting magic on the first try.",
      },
      {
        title: "Edit the winner yourself",
        body: "Take the best option and make the final pass by hand — check facts, adjust for brand voice, and make sure it actually sounds like your company and not like an AI wrote it. That last mile is still yours, and skipping it is where most of the embarrassing AI-marketing mistakes you've probably seen online come from.\n\nSave the prompts and phrasing that worked well somewhere you'll find them again. Over a few weeks, that running list becomes a genuinely valuable shortcut — the next similar task starts from a known-good prompt instead of a blank box.",
        tip: "Save prompts that worked well — you'll reuse them constantly.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "A Day in an AI-Augmented Marketing Team",
    beats: [
      {
        kind: "narrative",
        emoji: "🌅",
        body: "You're a marketing coordinator at a mid-size DTC brand. It's 9am, and your inbox already has three things waiting: a product launch email that needs a first draft, a sudden spike in ad spend that needs investigating, and a request from your manager for five social captions by lunch.\n\nNone of these is individually hard, but all three landing at once, before your first coffee, is exactly the kind of day this scenario is about — not because AI eliminates the pressure, but because it changes what you spend that pressure on.",
      },
      {
        kind: "decision",
        prompt: "You only have time to fully focus on one thing before your 10am standup, and all three tasks are technically due today. Draft the email by hand and you'll walk in with one solid deliverable and two untouched; lean on an AI assistant for the more templated pieces and you might free up real time for the thing that actually needs your judgment. Which do you tackle first?",
        choices: [
          {
            label: "Draft the launch email by hand — it's the highest-stakes piece",
            outcome: "The email takes the whole hour, drafted carefully sentence by sentence the way you always have. You walk into standup with one task fully done and two completely untouched — including the ad-spend spike, which is now two hours older and, as you're about to find out, actively costing money the longer it goes unexamined.",
          },
          {
            label: "Use an AI assistant to draft the email and captions in parallel, then dig into the ad spend",
            outcome: "In under 20 minutes you have a rough email draft ready for your own edit pass and five caption options to react to later, all generated in parallel while you were still finishing your coffee. That leaves the rest of the hour free for the one thing only you can actually do: dig into why ad spend just spiked.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "📊",
        body: "Good instinct. Digging into the ad platform's dashboard, you find the spend spike traces back to an automated bidding algorithm reacting to a competitor's flash sale — it started aggressively chasing the same high-intent keywords the competitor was suddenly bidding on too, driving up the price of every auction you're both in.",
      },
      {
        kind: "decision",
        prompt: "The bidding system is still running and the numbers are still climbing. Do you let the automated bidding system keep optimising, or step in and cap it manually?",
        choices: [
          {
            label: "Let it keep optimising — it's built to react to exactly this",
            outcome: "You leave it alone. Spend stays elevated for a few more hours, but so do conversions — it turns out the system was chasing genuinely warmer traffic drawn in by the competitor's promotion, not just burning money on inflated auctions. Net cost-per-acquisition ends up roughly flat once the dust settles.",
          },
          {
            label: "Cap the bids manually to be safe",
            outcome: "You cap the bids manually to be safe. Spend flattens immediately and the scary chart stops climbing, but so does traffic — and you never get to find out whether that traffic would have converted, because you cut it off before the system had a chance to prove it out.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "✅",
        body: "By lunch, the email draft is edited, fact-checked, and scheduled; the five captions are picked, tweaked for brand voice, and queued for the week; and you've made a real, informed call on the ad spend instead of just panicking at a scary-looking number on a dashboard.",
      },
      {
        kind: "narrative",
        emoji: "🌇",
        body: "None of today's work happened because AI \"did marketing\" for you — it cleared the first-draft and first-read work off your plate so your actual judgment went where it mattered most: the ad-spend decision that only you, with context AI didn't have, could make well. That's the pattern worth remembering as you go through the rest of this track.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📧",
        prompt: "Using AI to draft the email and captions in parallel freed up the coordinator's time for:",
        options: ["A longer lunch break", "Investigating the ad-spend spike personally", "Skipping the standup entirely", "Writing more captions"],
        correctIndex: 1,
        explain: "AI cleared the first-draft work so the coordinator's limited focus time went to the one task that needed real judgment.",
      },
      {
        kind: "choice",
        emoji: "📊",
        prompt: "What was the actual cause of the ad-spend spike in the scenario?",
        options: ["A tracking bug", "A bidding algorithm reacting to a competitor's flash sale", "A holiday", "An email server crash"],
        correctIndex: 1,
        explain: "The automated bidding system was chasing the same keywords as a competitor's flash sale.",
      },
      {
        kind: "blank",
        emoji: "🌇",
        sentence: "The scenario's core lesson is that AI cleared first-draft work so the coordinator's limited focus time went to the task requiring real human ___.",
        options: ["judgment", "typing", "luck", "code"],
        correctIndex: 0,
        explain: "AI freed up time for the ad-spend decision — the one thing that genuinely needed the coordinator's judgment.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "The New Marketing Job Description",
    cards: [
      {
        emoji: "💬",
        headline: "Prompt literacy is a real skill now",
        body: "Knowing how to describe a task clearly — audience, tone, constraints, format — gets dramatically better output from any AI tool you use. It's a learnable skill, not a personality trait or some kind of natural talent for \"getting\" AI; it's closer to learning how to brief a freelancer well, something most marketers already do informally and just haven't had to name yet.\n\nTeams that invest even a little deliberate practice into this tend to see the gap between \"AI output feels generic\" and \"AI output feels genuinely useful\" close within a few weeks.",
      },
      {
        emoji: "🧮",
        headline: "Data judgment matters more, not less",
        body: "As tools surface more predictions and recommendations — this customer is likely to churn, that campaign is under-delivering, this segment is worth more spend — someone still has to decide which of those signals to trust, which deserve a second look, and which are quietly wrong.\n\nMore automated insight doesn't reduce the need for judgment; if anything, it raises the stakes, because a bad call made confidently at scale is worse than a bad call made cautiously by hand.",
      },
      {
        emoji: "✏️",
        headline: "Editing is now a headline skill",
        body: "Teams that write less from scratch spend correspondingly more time editing AI drafts for accuracy, tone, and brand fit. Being a sharp editor — someone who can spot what's almost right, catch a wrong fact, and tighten a paragraph without losing its voice — is now as valuable as being a strong first-drafter used to be.\n\nIn many teams, it's more valuable, since it's the skill standing between a fast draft and something actually publishable.",
      },
      {
        emoji: "🧰",
        headline: "Tool fluency, not tool loyalty",
        body: "The specific AI products in use at your company will keep changing — the tool that's best-in-class this year may be replaced by something better in eighteen months. What stays valuable is comfort trying new tools quickly and figuring out where they actually help, rather than deep expertise in one particular product that might not exist in its current form a few years from now.",
      },
      {
        emoji: "🎯",
        headline: "Strategy and taste don't automate",
        body: "Deciding what a brand should say, who to target, and what \"good\" actually looks like for that specific brand and moment is still, and will likely remain, a human call. AI executes faster once that call is made — drafting the variations, running the tests, adjusting the bids — but it has no independent way to know whether the underlying direction is the right one.",
      },
    ],
    reflectPrompt: "Of these five skills, which one do you already feel confident in — and which one do you most want to build?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🧰",
        prompt: "According to this lesson, what does 'tool fluency, not tool loyalty' mean?",
        options: ["Sticking with one AI tool forever", "Being comfortable trying new tools quickly rather than committing to one specific product", "Avoiding AI tools entirely", "Only using free tools"],
        correctIndex: 1,
        explain: "The specific tools will keep changing — what stays valuable is comfort trying new ones quickly.",
      },
      {
        kind: "blank",
        emoji: "✏️",
        sentence: "As AI produces more first drafts, being a sharp ___ has become as valuable as being a strong first-drafter used to be.",
        options: ["editor", "typist", "designer", "accountant"],
        correctIndex: 0,
        explain: "Editing for accuracy, tone, and brand fit is now a headline skill.",
      },
      {
        kind: "choice",
        emoji: "🎯",
        prompt: "Which of these does the lesson say still requires human judgment?",
        options: ["Generating ad variants", "Deciding what a brand should say and who to target", "Summarising a report", "Drafting a subject line"],
        correctIndex: 1,
        explain: "Strategy and taste don't automate — AI executes faster once that call is made by a human.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Spot the AI Opportunity",
    intro: "You'll read a short marketing brief, then practice identifying where AI could genuinely help — and draft a first prompt for it. This is the kind of quick triage most marketers now do dozens of times a month: looking at a list of tasks and figuring out which ones are a good fit for an AI-assisted first pass, which ones need a bigger project like a predictive model, and which ones still just need a person to sit down and think.",
    steps: [
      {
        open: true,
        prompt: "Brief: \"Our regional coffee chain is launching a loyalty app next month. We need: a launch announcement email, a way to figure out which of our 40,000 existing customers are most likely to sign up early, and social posts in three different tones for testing.\" Read through all three needs in this brief and decide which one you'd hand to an AI tool first — the one where a quick AI-assisted draft would save the most time without much risk. Explain your reasoning in a sentence or two.",
        placeholder: "e.g. I'd start with the social post variations because...",
        modelAnswer: "The social post variations are the easiest fit — generating several tone options is fast, low-risk, and easy for a human to judge side by side, since a wrong tone is a two-minute fix, not a real problem. The \"most likely to sign up early\" question is also genuinely AI-suited, but it needs real customer data and a predictive model behind it, not a chat prompt — that's a bigger project involving a data or CRM team, not a five-minute task you can knock out over coffee.",
      },
      {
        open: true,
        prompt: "Draft a first prompt you'd give an AI writing assistant for the social post variations. Be specific about tone, format, and any facts the assistant needs to know about the loyalty app to write something usable on the first attempt.",
        placeholder: "e.g. Write 3 short Instagram captions announcing our new loyalty app...",
        modelAnswer: "Write 3 Instagram captions (under 150 characters each) announcing [Coffee Chain]'s new loyalty app launching next month. Give me one playful/casual version, one that leads with a concrete perk (free drink on signup), and one that creates urgency (limited early-access spots). Audience: existing customers who already visit weekly, so assume baseline brand familiarity rather than introducing the company from scratch.",
      },
      {
        open: false,
        prompt: "The \"most likely to sign up early\" task needs real customer data, not just a chat prompt. In one or two sentences, describe what kind of tool or process this actually calls for.",
        placeholder: "e.g. This needs a model that scores customers based on...",
        modelAnswer: "This calls for a predictive scoring model — likely built by a data or CRM team — that ranks existing customers using signals like visit frequency, past promo responsiveness, and usage of similar past app features, then hands marketing a ranked list to target first. It's a genuinely useful AI application, but it's a multi-week data project, not something a marketer can produce solo from a chat window — which is exactly the kind of distinction worth being able to make quickly.",
      },
    ],
    artifactTitle: "Your AI-opportunity notes for this brief",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📱",
        prompt: "In the exercise's brief, which task was identified as the easiest fit to hand to AI first?",
        options: ["Generating social post tone variations", "Building a predictive customer scoring model", "Hiring new staff", "Renovating a store"],
        correctIndex: 0,
        explain: "Generating several tone options is fast, low-risk, and easy for a human to judge side by side.",
      },
      {
        kind: "choice",
        emoji: "📊",
        prompt: "Why couldn't the 'most likely to sign up early' task be solved with just a chat prompt?",
        options: ["It needs real customer data and a predictive model, not just a prompt", "It was too easy for AI", "It required no data at all", "Chat tools cannot generate any text"],
        correctIndex: 0,
        explain: "That task calls for a predictive scoring model built on real customer data — a bigger project than a five-minute prompt.",
      },
      {
        kind: "blank",
        emoji: "💬",
        sentence: "A good AI prompt for generating content variations should specify ___ and format, not just the general topic.",
        options: ["tone", "file size", "font", "currency"],
        correctIndex: 0,
        explain: "Specific constraints like tone and format get dramatically better output than a vague ask.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Setting Up Your AI Workspace",
    toolName: "Claude Projects",
    toolUrl: "https://claude.ai",
    steps: [
      {
        title: "Create a dedicated project for marketing work",
        body: "Start a Project and name it something like \"[Your Brand] Marketing.\" Anything you add to it — brand guidelines, past campaign briefs, tone examples — stays available across every chat inside that project, instead of you having to re-explain context from scratch every single time you open a new conversation.\n\nThis single setup step is what turns a generic AI assistant into something that actually feels like it knows your brand, and it takes about five minutes to do once.",
      },
      {
        title: "Add your brand context once",
        body: "Paste your brand voice guidelines, a target audience description, and a few examples of copy you genuinely like into the project's knowledge. Now every draft you request starts already knowing who you're writing for and what your brand actually sounds like, instead of defaulting to a generic, vaguely corporate tone.",
        tip: "Even a rough half-page voice guide makes a noticeable difference in output.",
      },
      {
        title: "Save your best prompts as templates",
        body: "When a prompt structure works well — like \"give me 5 options in different tones\" — save it somewhere you'll actually find it again, whether that's a note inside the project, a shared doc, or a pinned message. You're not reinventing the wheel every time you need a similar kind of draft, and over a few months this becomes a genuinely useful internal library.",
      },
      {
        title: "Keep a short list of go-to tools",
        body: "You don't need ten different AI tools running at once. Most marketers do perfectly well with one strong writing assistant, one image generator, and whatever analytics or automation tool their team already has in place.\n\nDepth with a handful of tools you actually know well beats shallow familiarity with a dozen you've only tried once — that's true of most software, and especially true here.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "When the AI Gets It Wrong",
    beats: [
      {
        kind: "narrative",
        emoji: "📝",
        body: "You used an AI assistant to draft a comparison blog post: \"5 Reasons Our Software Beats [Competitor].\" The draft reads smoothly, hits all the right structural beats, and — on a first skim — looks completely ready to publish.",
      },
      {
        kind: "decision",
        prompt: "Before publishing, you notice one specific claim buried in point three: \"Our platform processes data 3x faster than [Competitor]'s.\" You don't actually have a benchmark that says this anywhere in your files. What do you do?",
        choices: [
          {
            label: "Cut the specific number, keep a softer general claim you can stand behind",
            outcome: "You cut the specific number and keep a softer, general claim you can actually stand behind if anyone ever asks. The post goes out slightly less punchy, but every sentence in it is something you could defend in a meeting — and nobody outside your team ever knows a fabricated number was even briefly on the table.",
          },
          {
            label: "Publish as-is — it sounds plausible and competitors exaggerate too",
            outcome: "You publish as-is, reasoning it sounds plausible and competitors exaggerate too. A reader familiar with both products calls out the unverified claim in the comments within a day, and your team spends the next afternoon issuing a quiet correction instead of enjoying the launch.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🔍",
        body: "This is a hallucination — the AI produced a specific, confident-sounding number with no real source or benchmark behind it. It's one of the most common failure modes of generative AI, and the tricky part is that it reads exactly like true, well-sourced content. There's no stylistic tell that gives it away; the only way to catch it is to actually check.",
      },
      {
        kind: "decision",
        prompt: "Going forward, as this kind of draft becomes routine at your company, how do you build a lasting habit around this risk rather than relying on catching it by luck each time?",
        choices: [
          {
            label: "Treat every specific number, stat, or claim in AI output as unverified until you check it",
            outcome: "You treat every specific number, stat, or named claim in AI output as unverified until you personally check it. Over the next month, this habit catches two more unsupported claims before they ever go out — a small, slightly tedious habit that quietly prevents a real reputational risk from ever becoming visible.",
          },
          {
            label: "Only double-check claims that feel obviously suspicious",
            outcome: "You decide to only double-check claims that feel obviously suspicious. Most of the time this is fine, but confident-sounding false claims are, by definition, exactly the ones that don't feel suspicious — which is precisely why they're the ones that eventually slip through a habit built this way.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "💡",
        body: "The lesson here isn't \"never use AI for anything involving facts\" — it's that fluent, well-structured writing is not the same thing as accurate writing. Fact-checking is now simply part of the editing pass, every single time, the same way a human writer's draft always got a review before it went out the door.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🤖",
        prompt: "What is a 'hallucination' as illustrated in this scenario?",
        options: ["A tool crashing", "A confident, specific-sounding claim that isn't actually true", "A slow response", "A tool refusing to answer"],
        correctIndex: 1,
        explain: "The AI produced a confident-sounding statistic with no real source behind it — a hallucination.",
      },
      {
        kind: "choice",
        emoji: "🛡️",
        prompt: "What was the recommended habit for handling specific numbers or claims in AI-drafted content?",
        options: ["Trust them if they sound confident", "Treat every specific claim as unverified until checked", "Remove all numbers from content", "Only check claims about competitors"],
        correctIndex: 1,
        explain: "Confident phrasing isn't evidence of accuracy — specific claims need to be verified before publishing.",
      },
      {
        kind: "blank",
        emoji: "✅",
        sentence: "Fluent writing is not the same thing as ___ writing — fact-checking is now part of the editing pass.",
        options: ["accurate", "short", "colorful", "fast"],
        correctIndex: 0,
        explain: "Fluency and accuracy are different things — fact-checking is a permanent part of the process now.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "Where This Track Is Headed",
    cards: [
      {
        emoji: "✍️",
        headline: "Module 2: AI-Powered Content Creation",
        body: "Module 2 goes deep on how generative models actually write and design — the mechanics behind the drafts you saw in this module — and on building a brand voice guide that holds up consistently across dozens of AI-assisted drafts. You'll get hands-on practice drafting real assets, including a product description and a full content-repurposing exercise, so the ideas from this module turn into a repeatable habit rather than a one-time demo.",
      },
      {
        emoji: "🎯",
        headline: "Module 3: Data, Targeting & Personalisation",
        body: "Module 3 covers how AI segments audiences and personalises experiences in real time — the mechanics behind the \"dozens of live micro-segments\" idea from earlier in this module — and spends real time on where personalisation crosses from genuinely helpful into invasive. That line matters more than it might sound like right now; it's one of the more consequential judgment calls a marketer makes.",
      },
      {
        emoji: "🚀",
        headline: "Module 4: AI Tools for Campaigns",
        body: "Module 4 moves into the tools that actually run campaigns: programmatic buying, automated bidding (the same mechanism behind the ad-spend scenario earlier in this module), dynamic ad testing, and AI-assisted email and chat marketing. This is the most tactical module in the track — expect to build a real campaign brief and test real ad variants yourself.",
      },
      {
        emoji: "📊",
        headline: "Module 5: Measuring & Optimising with AI",
        body: "Module 5 covers reading AI-generated dashboards without getting fooled by them, understanding how attribution changed after third-party cookies started disappearing, and — critically — knowing when to trust an automated insight versus when to dig deeper before acting on it.",
      },
      {
        emoji: "🏆",
        headline: "Module 6: Your AI Marketing Strategy",
        body: "Module 6 closes the track with the ethics of AI-assisted marketing — disclosure, deepfake risk, and where the line actually sits — plus an honest look at what still requires a human no matter how good the tools get. You'll finish by building your own personal AI marketing playbook, a living document meant to outlast any single tool you're using today.",
      },
    ],
    reflectPrompt: "Which of the next five modules are you most curious about, and why?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🎯",
        prompt: "Which module covers where personalisation crosses from helpful into invasive?",
        options: ["Module 2", "Module 3", "Module 5", "Module 6"],
        correctIndex: 1,
        explain: "Module 3, Data, Targeting & Personalisation, covers this directly.",
      },
      {
        kind: "choice",
        emoji: "🚀",
        prompt: "Which module focuses on programmatic buying, automated bidding, and AI-assisted email/chat marketing?",
        options: ["Module 2", "Module 4", "Module 5", "Module 6"],
        correctIndex: 1,
        explain: "Module 4, AI Tools for Campaigns, covers programmatic buying, bidding, email, and chatbots.",
      },
      {
        kind: "blank",
        emoji: "🏆",
        sentence: "Module 6 focuses on the ethics of AI-assisted marketing and building your own personal AI ___.",
        options: ["playbook", "spreadsheet", "logo", "invoice"],
        correctIndex: 0,
        explain: "Module 6 closes the track by having you build a personal AI marketing playbook.",
      },
    ],
  },
  {
    type: "quiz",
    lessonTitle: "Module 1 Check-In",
    questions: [
      {
        kind: "choice",
        emoji: "🌐",
        prompt: "Which of these is NOT one of the four areas where AI shows up in marketing today?",
        options: ["Generative content creation", "Predictive analytics", "Manually mailing printed catalogs", "Real-time personalisation"],
        correctIndex: 2,
        explain: "Generative content, predictive analytics, automation, and personalisation are the four areas — printed catalogs are a channel, not an AI capability.",
      },
      {
        kind: "blank",
        emoji: "✍️",
        sentence: "Because AI can produce a rough first draft in minutes, a marketer's time shifts from creation toward ___.",
        options: ["curation and editing", "complete inaction", "slower writing", "ignoring drafts"],
        correctIndex: 0,
        explain: "The work moves from writing from zero to reviewing, fact-checking, and sharpening an AI-generated starting point.",
      },
      {
        kind: "choice",
        emoji: "🤖",
        prompt: "What is a \"hallucination\" in the context of generative AI?",
        options: ["A tool crashing unexpectedly", "A confident, fluent-sounding claim that isn't actually true", "A slow response time", "An overly cautious answer"],
        correctIndex: 1,
        explain: "Hallucinations are fabricated facts or numbers stated with the same confidence as true ones — which is exactly why they're easy to miss.",
      },
      {
        kind: "choice",
        emoji: "🎯",
        prompt: "In the Module 1 scenario, what was the real value of using AI to draft the launch email and captions?",
        options: ["It made the coordinator's job unnecessary", "It freed up focused time for the one task that genuinely needed human judgment", "It removed the need for any editing", "It let the coordinator skip the standup"],
        correctIndex: 1,
        explain: "AI cleared first-draft work so the coordinator's limited focus time went to investigating the ad-spend spike — the task only they could judge.",
      },
      {
        kind: "blank",
        emoji: "🧠",
        sentence: "AI can execute a marketing decision faster once it's made, but deciding what a brand should say and who to target is still a ___ call.",
        options: ["human", "random", "fully automated", "irrelevant"],
        correctIndex: 0,
        explain: "Strategy and taste don't automate — AI accelerates execution, not judgment.",
      },
      {
        kind: "choice",
        emoji: "🛡️",
        prompt: "What's the recommended habit for handling specific stats or claims that appear in AI-drafted content?",
        options: ["Trust them if they sound confident", "Remove all numbers from marketing copy", "Treat every specific claim as unverified until checked", "Only check claims from competitors"],
        correctIndex: 2,
        explain: "Confident phrasing isn't evidence of accuracy — specific claims need to be verified before publishing, every time.",
      },
    ],
  },
];

// ── Module 2 — AI-Powered Content Creation ───────────────────────────────────
const module2: LessonContent[] = [
  {
    type: "tool-walkthrough",
    lessonTitle: "Meet Your AI Writing Assistant",
    toolName: "ChatGPT",
    toolUrl: "https://chatgpt.com",
    steps: [
      {
        title: "Pick one real writing task",
        body: "Don't start with something abstract like \"help me write better.\" Pick one concrete piece you actually need today — a subject line, a product headline, a social caption — since a specific target gives the assistant something real to work with instead of a vague aspiration.\n\nMarketers who start abstract tend to get abstract, forgettable output back; the fastest way to feel the value of these tools is to bring a genuine task, not a hypothetical one.",
        tip: "Concrete beats abstract every time with these tools.",
      },
      {
        title: "Give it the constraints up front",
        body: "State length, tone, and audience in the same message: \"Write a 1-sentence product headline, playful tone, for busy parents shopping for meal kits.\" Constraints up front save you a round of back-and-forth, since the assistant isn't guessing at word count or formality and then getting corrected after the fact.\n\nThink of constraints as the brief you'd hand a new freelancer on day one — the more of that context lands in the first message, the less time gets spent on revisions that just restate information you already had.",
      },
      {
        title: "Ask it to explain its choices",
        body: "If a draft feels close but not quite right, ask \"why did you choose that phrasing?\" The explanation often reveals an assumption you can correct directly — maybe it assumed a more formal audience than you actually have, or leaned on a cliché because your brief didn't rule it out — which is usually faster than guessing at a rewrite blind.",
      },
      {
        title: "Build a two-message habit",
        body: "Message one is the ask; message two is your reaction and refinement. Most useful AI writing sessions are two or three messages, not one perfectly engineered prompt — trying to write the \"perfect\" first prompt often wastes more time than just sending a decent one and correcting it.\n\nOnce this becomes a habit, a full writing session — brief, draft, refine, final edit — usually takes under five minutes for something that used to take twenty.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "How Generative AI Actually Writes and Designs",
    cards: [
      {
        emoji: "🔤",
        headline: "Text models predict the next word",
        body: "Large language models generate text by predicting the most likely next word, over and over, based on patterns learned from huge amounts of writing. There's no lookup of \"the right answer\" happening anywhere in the process — just a well-informed statistical guess at each step, chained together fast enough that the result reads as a coherent sentence.\n\nUnderstanding this mechanically changes how you use these tools: you're not querying a database of facts, you're steering a very capable pattern-completion engine.",
      },
      {
        emoji: "⚠️",
        headline: "That's why they're fluent but sometimes wrong",
        body: "The same mechanism that makes output read smoothly can also produce a confident, fabricated fact — the model is optimising for plausible-sounding text, not for truth. It has no internal sense of \"I'm not sure about this one\"; a fabricated statistic and a verified one are generated through the exact same process and can look identical on the page.",
      },
      {
        emoji: "🌀",
        headline: "Image models work differently: diffusion",
        body: "Tools like Midjourney or DALL·E work completely differently from text models: they start from random visual noise and gradually refine it into an image matching your text prompt, guided by patterns learned from enormous image datasets. Each generation is a fresh random walk toward your description, which is why asking the same prompt twice produces two different images rather than one fixed result.",
      },
      {
        emoji: "💪",
        headline: "Where these tools are strong",
        body: "These tools are strongest at first drafts, brainstorming variations, summarising long material, and producing visual concepts quickly — anywhere a fast, rough starting point beats staring at a blank page. That's a genuinely large share of day-to-day marketing work, which is why the impact has been so immediate across the industry.",
      },
      {
        emoji: "🚧",
        headline: "Where they're weak",
        body: "They're weakest at verifiable facts and numbers, up-to-the-minute information, brand-specific nuance they were never told about, and complex multi-step reasoning without careful guidance. Knowing this list is often more useful than knowing the list of strengths — it tells you exactly where to slow down and double-check.",
      },
    ],
    reflectPrompt: "Given how these models actually work — predicting patterns, not looking up truth — what's one type of marketing task you'd now be more cautious handing to AI?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🔤",
        prompt: "How do large language models generate text?",
        options: ["By looking up verified facts in a database", "By predicting the most likely next word based on learned patterns", "By recording human dictation", "By randomly selecting words"],
        correctIndex: 1,
        explain: "LLMs generate text through pattern-based next-word prediction, not fact lookup.",
      },
      {
        kind: "choice",
        emoji: "🌀",
        prompt: "How do image diffusion models like Midjourney or DALL·E work?",
        options: ["They start from random noise and refine it toward the prompt", "They copy an existing photo exactly", "They record a video and extract a frame", "They require no training data"],
        correctIndex: 0,
        explain: "Diffusion models gradually refine random noise into an image matching the prompt.",
      },
      {
        kind: "blank",
        emoji: "⚠️",
        sentence: "Because LLMs optimise for plausible-sounding text rather than truth, they can be fluent but sometimes ___.",
        options: ["wrong", "slow", "expensive", "silent"],
        correctIndex: 0,
        explain: "The same mechanism that makes output fluent can also produce confident, fabricated claims.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Draft a Product Description with AI",
    intro: "You'll write your own product description prompt and draft, then compare it to a model example using the same brief. This exercise exists because the fastest way to build real judgment about AI-generated copy is to first write something yourself and feel exactly where the gap is.",
    steps: [
      {
        open: true,
        prompt: "Brief: a reusable stainless steel water bottle, keeps drinks cold 24 hours, aimed at outdoor/hiking customers, $32. Write a first-pass product description (2-3 sentences) yourself, without AI, exactly as you would today — this is your baseline for comparison in the next two steps.",
        placeholder: "e.g. Stay hydrated on every trail with...",
        modelAnswer: "Built for the trail and made to last, this stainless steel bottle keeps drinks ice-cold for 24 hours, so your water is as refreshing at mile ten as it was at the trailhead. Lightweight, leak-proof, and tough enough for daily use — hydration that keeps up with you, whether that's a weekend hike or a daily commute.",
      },
      {
        open: false,
        prompt: "Now write the prompt you'd give an AI assistant for the same brief. Include the product facts, the audience, and the tone you want — the same information a new copywriter would need on day one.",
        placeholder: "e.g. Write a product description for a stainless steel water bottle...",
        modelAnswer: "Write a 2-3 sentence product description for a stainless steel water bottle. Facts: keeps drinks cold 24 hours, leak-proof, $32. Audience: hikers and outdoor enthusiasts. Tone: energetic but not over-the-top, focused on reliability on the trail rather than lifestyle branding.",
      },
      {
        open: false,
        prompt: "Compare your own draft to the model's. Where does yours do something better — a phrase, a fact, a feeling — that you'd keep even after using AI?",
        placeholder: "e.g. I liked how mine emphasised...",
        modelAnswer: "There's no single right answer here — the point is noticing specifics: maybe your version led with a benefit AI missed, used a more distinctive verb, or better matched a phrase your brand already uses elsewhere. Keep those specific wins and merge them into the final draft rather than defaulting to whichever version came first.",
      },
    ],
    artifactTitle: "Your product description, drafted and compared",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "✍️",
        prompt: "In this exercise, why write your own draft before seeing an AI prompt and example?",
        options: ["To compare where your own instincts add something AI missed", "Because AI cannot write product descriptions", "To waste time", "Because it's required by law"],
        correctIndex: 0,
        explain: "Comparing your own draft to the AI's helps you notice what your version does better and keep it.",
      },
      {
        kind: "blank",
        emoji: "🎯",
        sentence: "A good AI prompt for a product description should include the product's key facts, audience, and ___.",
        options: ["desired tone", "company address", "stock price", "warehouse location"],
        correctIndex: 0,
        explain: "Facts, audience, and tone together produce far better output than a vague ask.",
      },
      {
        kind: "choice",
        emoji: "🔀",
        prompt: "What's suggested you do after comparing your own draft to the AI's example?",
        options: ["Discard your own draft entirely", "Keep any phrase, fact, or feeling your version did better and merge it in", "Always use the AI version untouched", "Ignore both and start over"],
        correctIndex: 1,
        explain: "Merging the strongest parts of each draft produces a better final result than picking just one wholesale.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "Brand Voice in the Age of AI",
    cards: [
      {
        emoji: "❓",
        headline: "AI has no brand memory by default",
        body: "Ask two different AI tools for \"product copy\" and you'll get two noticeably different voices — neither one necessarily yours. Brand voice has to be actively supplied to the tool every time, not assumed as some kind of default setting; without that input, you're getting the model's generic idea of good marketing copy, not your brand's.",
      },
      {
        emoji: "📘",
        headline: "A voice guide is now a prompt asset",
        body: "A short document — 5 to 10 adjectives, a few clear do's and don'ts, two or three example sentences you're proud of — turns into raw material you can paste into almost every content prompt going forward. Building this once pays off every single time you draft something afterward, which is a genuinely rare kind of one-time investment in marketing work.",
      },
      {
        emoji: "👀",
        headline: "Show, don't just tell",
        body: "Pasting 2-3 real examples of copy you love works better than describing the tone abstractly with adjectives alone. Models pick up on patterns from concrete examples far faster than they interpret words like \"friendly\" or \"bold,\" which mean something slightly different to every writer and every model.",
      },
      {
        emoji: "✅",
        headline: "Consistency needs a checkpoint, not just a guide",
        body: "Even with a great voice guide in place, someone should still scan finished AI-drafted copy before it ships — the same way a human copywriter's work always got a review pass before publishing. A voice guide reduces how often things go off-brand; it doesn't eliminate the need for a final human check.",
      },
    ],
    reflectPrompt: "If you had to describe your (or a brand you admire's) voice in exactly 5 words, what would they be?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "❓",
        prompt: "Why doesn't AI automatically match a specific brand's voice?",
        options: ["AI has no brand memory by default — voice must be actively supplied", "AI only writes in one universal tone", "Brand voice doesn't matter to AI tools", "AI refuses to write marketing copy"],
        correctIndex: 0,
        explain: "Brand voice has to be actively supplied through guides and examples, not assumed.",
      },
      {
        kind: "choice",
        emoji: "👀",
        prompt: "What does the lesson recommend works better than describing tone with abstract adjectives alone?",
        options: ["Pasting real example sentences you love", "Using no examples at all", "Writing only in ALL CAPS", "Avoiding any brand guidance"],
        correctIndex: 0,
        explain: "Models pick up on patterns from concrete examples faster than from adjectives alone.",
      },
      {
        kind: "blank",
        emoji: "✅",
        sentence: "Even with a strong voice guide, someone should still ___ finished AI-drafted copy before it ships.",
        options: ["review/scan", "delete", "ignore", "translate"],
        correctIndex: 0,
        explain: "A human review pass is still needed, the same way a human copywriter's work always got checked.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Building a Brand Voice Prompt Library",
    toolName: "Notion",
    toolUrl: "https://notion.so",
    steps: [
      {
        title: "Create one page for your brand voice",
        body: "List 5-10 adjectives that describe the voice, 3 things it never does (for example, \"never uses exclamation points\"), and 2-3 example sentences you're genuinely proud of. Keep this page short enough that someone could read the whole thing in under two minutes — a voice guide nobody reads doesn't help anyone.",
      },
      {
        title: "Add a section of reusable prompt templates",
        body: "Save the exact prompt structures that worked well — for captions, product descriptions, emails — as fill-in-the-blank templates you can copy and adapt for the next similar task. Over time this becomes a genuine shortcut library, turning what used to be a from-scratch prompt into a thirty-second edit.",
        tip: "Write templates with placeholders like [PRODUCT] and [AUDIENCE] so they're ready to reuse.",
      },
      {
        title: "Paste the voice guide into every content prompt",
        body: "Before asking for a draft, paste your voice guide section in first: \"Here's our brand voice: [paste]. Now write...\" It costs a few extra seconds per prompt and meaningfully improves consistency across everyone on the team using the tool, not just you.",
      },
      {
        title: "Update it when something feels off",
        body: "If AI output keeps missing the mark in the same specific way — the same wrong opening line, the same overly formal phrase — that's a clear signal to add a new rule or example to the guide. Treat it as a living document that improves every time something goes slightly wrong, not a one-time setup you write once and forget.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "The Off-Brand Draft",
    beats: [
      {
        kind: "narrative",
        emoji: "📬",
        body: "Your brand is warm and a little irreverent — never corporate, never stiff. An AI-drafted welcome email for new subscribers comes back reading like a legal disclaimer: formal, hedged, and completely generic, as if it could have been written for any company in any industry.",
      },
      {
        kind: "decision",
        prompt: "What's your first move — do you scrap the draft and start over yourself, or work with what the AI gave you?",
        choices: [
          {
            label: "Rewrite the whole email yourself from scratch",
            outcome: "You rewrite the whole email yourself from scratch. You get an email in your exact voice, but it takes as long as if you'd never used AI at all — the structure and ideas from the original draft go completely unused, and you're back to a blank page.",
          },
          {
            label: "Feed the draft back in with specific voice notes and ask for a revision",
            outcome: "You feed the draft back in with specific voice notes and ask for a revision. The next version keeps the useful structure but drops the stiff phrasing. Two more rounds of specific notes get it fully on-voice in a fraction of the from-scratch time it would have taken to write it yourself.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🔁",
        body: "You reply: \"This is too formal — we never say 'we are pleased to inform you.' Rewrite it like you're texting a friend some genuinely good news, and cut anything that sounds like a policy document.\" That single piece of concrete feedback does more work than a page of abstract notes would have.",
      },
      {
        kind: "decision",
        prompt: "The next draft is much better but still opens with \"Welcome to our newsletter\" — flat and generic. Is this worth fixing, or is it close enough to ship?",
        choices: [
          {
            label: "Accept it — it's good enough and you're short on time",
            outcome: "You accept it since it's good enough and you're short on time. The email goes out fine, but that flat opening line quietly becomes the default for future drafts too, since nobody ever flagged it as a problem.",
          },
          {
            label: "Flag the opening line specifically and add a rule to your voice guide",
            outcome: "You flag the opening line specifically and add a rule to your voice guide. The rewritten opener is stronger, and \"never open with 'Welcome to our newsletter'\" goes into your brand voice guide — the next draft, and every one after it, starts better without you having to catch the same mistake twice.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "📈",
        body: "Getting AI output on-brand is rarely one prompt — it's a short back-and-forth, the same as briefing a new freelance writer for the first time. The real payoff is that each correction you save to your voice guide makes every future draft a little better, not just this one, which is what makes the investment compound instead of resetting every time.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🔁",
        prompt: "What ultimately fixed the recurring generic opening-line problem in this scenario?",
        options: ["Rewriting everything from scratch every time", "Adding a specific rule about it to the brand voice guide", "Ignoring the issue", "Switching companies"],
        correctIndex: 1,
        explain: "Saving the correction to the voice guide meant every future draft started better, not just the one being edited.",
      },
      {
        kind: "choice",
        emoji: "📬",
        prompt: "What was the first symptom of the off-brand draft in this scenario?",
        options: ["It was too short", "It read like a formal, hedged legal disclaimer instead of the brand's warm, irreverent tone", "It had spelling errors", "It was written in the wrong language"],
        correctIndex: 1,
        explain: "The draft came back stiff and generic, missing the brand's actual warm, irreverent voice.",
      },
      {
        kind: "blank",
        emoji: "🤝",
        sentence: "Getting AI output on-brand is rarely one prompt — it's usually a short ___, similar to briefing a new freelance writer.",
        options: ["back-and-forth", "refund request", "legal review", "meeting"],
        correctIndex: 0,
        explain: "A short round of specific feedback, not one perfect prompt, is what gets AI output on-voice.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Turn One Blog Post into Five Formats",
    intro: "Repurposing is one of the highest-leverage uses of AI in content marketing: one piece of long-form writing, restructured into several formats for different channels without starting from scratch each time. A single good blog post can realistically fuel a week's worth of social and email content if it's repurposed well.",
    steps: [
      {
        open: true,
        prompt: "Imagine you just published a 1,000-word blog post: \"5 Ways to Meal-Prep Without Getting Bored of the Same 5 Meals.\" Write a prompt asking an AI assistant to turn it into a 3-slide Instagram carousel outline, specifying what belongs on each slide.",
        placeholder: "e.g. Turn this blog post into a 3-slide carousel...",
        modelAnswer: "Turn this blog post into a 3-slide Instagram carousel outline. Slide 1: a hook stating the problem (meal-prep boredom). Slide 2: 3 of the 5 tips, condensed to one line each. Slide 3: a call-to-action driving to the full post. Keep language casual and scannable, since carousel slides get skimmed in under two seconds each.",
      },
      {
        open: false,
        prompt: "Now write a prompt asking for the same blog post to become a short email newsletter blurb (2-3 sentences plus a link) — a completely different format with different constraints than the carousel.",
        placeholder: "e.g. Summarize this post for our weekly newsletter...",
        modelAnswer: "Summarise this blog post in 2-3 sentences for our weekly email newsletter. Lead with the most surprising tip, keep the tone conversational, and end with \"Read the full post →\" linking out. Assume the reader already opened the email, so don't re-sell the newsletter itself.",
      },
      {
        open: false,
        prompt: "Finally, write a prompt asking for one social post teasing the article, written to spark curiosity rather than summarising everything — the opposite instinct from the newsletter blurb.",
        placeholder: "e.g. Write a post teasing this blog article...",
        modelAnswer: "Write one social post (under 280 characters) teasing this blog post without giving away all 5 tips. Lead with the meal-prep-boredom problem as a relatable hook, and end with a reason to click through rather than a full summary.",
      },
    ],
    artifactTitle: "Your repurposing prompts for one blog post, three formats",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🔁",
        prompt: "What is 'repurposing' in this lesson's context?",
        options: ["Deleting old content", "Turning one piece of long-form content into multiple shorter formats for different channels", "Translating content into other languages only", "Writing only new content, never reusing anything"],
        correctIndex: 1,
        explain: "Repurposing takes one long-form piece and reshapes it into shorter formats for different channels.",
      },
      {
        kind: "choice",
        emoji: "🖼️",
        prompt: "What should a good carousel-outline prompt specify, per this exercise?",
        options: ["Nothing, just the topic", "Slide count, what goes on each slide, and tone", "Only the font to use", "The company's tax ID"],
        correctIndex: 1,
        explain: "A useful prompt spells out structure — slide count, content per slide — and the tone to write in.",
      },
      {
        kind: "blank",
        emoji: "🎯",
        sentence: "A good teaser post prompt should spark ___ rather than summarising everything in the original post.",
        options: ["curiosity", "confusion", "silence", "legal risk"],
        correctIndex: 0,
        explain: "Teaser content works by creating a reason to click through, not by giving everything away.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "AI Image and Video Generation for Marketers",
    cards: [
      {
        emoji: "🖼️",
        headline: "From text to image in one prompt",
        body: "Tools like Midjourney, DALL·E, and Adobe Firefly turn a text description into an original image in seconds — useful for concept visuals, social graphics, and rapid mockups that used to require briefing a designer and waiting a day or two for a first pass.",
      },
      {
        emoji: "🎯",
        headline: "Great for concepts, risky for finals",
        body: "These tools are strong for exploring visual directions fast, but specific product renders, exact brand colors, and small text or logos inside images are still frequently unreliable. Treat generated images as a way to explore a direction quickly, not as a final asset ready for print or a hero banner without human polish.",
      },
      {
        emoji: "🎬",
        headline: "Video generation is catching up",
        body: "AI video tools can now generate short clips from text or turn a still image into simple motion — useful for quick social content where a rough clip is good enough. Longer, polished video still usually needs a human editor, especially anywhere brand consistency or precise pacing actually matters.",
      },
      {
        emoji: "⚖️",
        headline: "Licensing and rights matter",
        body: "Where an image-generation tool's training data came from, and what commercial rights you actually have to its output, varies meaningfully by tool and keeps changing as these products evolve. Check each platform's commercial terms before using generated visuals in paid campaigns — this is a real legal and business consideration, not just a technical footnote.",
      },
    ],
    reflectPrompt: "If you could generate one type of visual instantly for your marketing, what would save you the most time?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🖼️",
        prompt: "What is image/video generation currently strong at, per this lesson?",
        options: ["Exact, precise product renders every time", "Exploring visual concepts and directions quickly", "Replacing all photographers permanently", "Guaranteeing brand color accuracy"],
        correctIndex: 1,
        explain: "These tools are strong for exploring visual directions fast, but weaker on precise, exact details.",
      },
      {
        kind: "choice",
        emoji: "⚖️",
        prompt: "What should marketers check before using AI-generated visuals in paid campaigns?",
        options: ["Nothing, they're always free to use", "Each platform's commercial licensing/rights terms", "The weather forecast", "Their own artistic ability"],
        correctIndex: 1,
        explain: "Licensing and commercial-use rights vary by tool and should be checked before paid use.",
      },
      {
        kind: "blank",
        emoji: "🎯",
        sentence: "AI image tools are often unreliable for exact product renders and small ___ inside images.",
        options: ["text", "weather", "music", "currency"],
        correctIndex: 0,
        explain: "Specific product details and small text/logos are a known weak spot for image generation tools.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "Fact-Checking an AI-Written Draft",
    beats: [
      {
        kind: "narrative",
        emoji: "📰",
        body: "You asked an AI assistant to draft a short \"Did You Know?\" section for a newsletter about sustainable packaging. It returns a confident, specific-sounding statistic about how much plastic packaging the average household uses per year — exactly the kind of eye-catching number that makes a newsletter section work.",
      },
      {
        kind: "decision",
        prompt: "The number sounds plausible and exactly supports the point you want to make. Do you verify it before publishing, or trust that it sounds right?",
        choices: [
          {
            label: "Search for the original source of that specific number",
            outcome: "You search for the original source of that specific number. You can't find it anywhere — it appears to be a fabrication that just happened to sound statistically reasonable. You swap in a stat from a source you can actually link to, and the newsletter is stronger for it.",
          },
          {
            label: "Include it as-is since it supports your point and sounds right",
            outcome: "You include it as-is since it supports your point and sounds right. A subscriber replies asking for the source. You can't provide one, and you have to send a follow-up correction to your whole list — a small but entirely avoidable credibility hit.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🧾",
        body: "Good move checking it. As a rule worth internalising: any number, statistic, or named source that shows up in AI-generated content needs an actual citation you can point to before it goes anywhere public, no matter how minor the piece of content feels.",
      },
      {
        kind: "decision",
        prompt: "You find a real, verifiable statistic that's still compelling but a little less dramatic than the fabricated one. Do you use the real number, or keep searching for something closer to the original?",
        choices: [
          {
            label: "Use the real, slightly less dramatic number, with a link to the source",
            outcome: "You use the real, slightly less dramatic number, with a link to the source. The newsletter goes out fully accurate and fully defensible — modestly less punchy than the fabricated version, but nothing in it will ever need to be walked back.",
          },
          {
            label: "Keep looking for a source that matches the original, more dramatic number",
            outcome: "You keep looking for a source that matches the original, more dramatic number. After 20 minutes you still can't verify it and have to use the real number anyway — time that could have gone into literally anything else.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "✅",
        body: "Fact-checking AI-generated claims isn't a sign the tool failed — it's simply part of the editing process now, the same way a human writer's work always got checked before it published. Building this habit once means you stop having to think about it consciously; it just becomes how drafts get finished.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🔍",
        prompt: "What did checking the source of the newsletter statistic reveal?",
        options: ["The number was accurate and well-documented", "The number appeared to be a fabrication with no findable source", "The number was actually too conservative", "There was no number in the draft"],
        correctIndex: 1,
        explain: "The specific-sounding statistic couldn't be verified anywhere — it appeared to be a hallucination.",
      },
      {
        kind: "choice",
        emoji: "🧾",
        prompt: "What's the rule this lesson recommends for numbers or named sources in AI-generated content?",
        options: ["Never include any numbers", "They need an actual citation you can point to before publishing", "Only check numbers under 100", "Trust numbers that sound modest"],
        correctIndex: 1,
        explain: "Any specific claim needs a real, checkable source before it goes anywhere public.",
      },
      {
        kind: "blank",
        emoji: "✅",
        sentence: "Fact-checking AI-generated claims is simply part of the ___ process now, not a sign the tool failed.",
        options: ["editing", "hiring", "shipping", "billing"],
        correctIndex: 0,
        explain: "Fact-checking is now a standard part of the editing pass, the same way human writing always got checked.",
      },
    ],
  },
  {
    type: "quiz",
    lessonTitle: "Module 2 Check-In",
    questions: [
      {
        kind: "choice",
        emoji: "🧠",
        prompt: "Why do language models sometimes produce confident, fabricated facts?",
        options: ["They intentionally try to deceive users", "They predict likely-sounding text, not verified truth", "They only work with old information", "They refuse to answer factual questions"],
        correctIndex: 1,
        explain: "LLMs generate the most statistically likely next words based on patterns, which can produce fluent but false claims — this isn't intentional deception, it's how the mechanism works.",
      },
      {
        kind: "blank",
        emoji: "🎨",
        sentence: "AI image tools are strong for exploring visual concepts quickly, but ___ product renders and small text inside images are still often unreliable.",
        options: ["exact/specific", "completely random", "black-and-white", "low-resolution"],
        correctIndex: 0,
        explain: "Diffusion models are great for fast concept exploration, but precise brand details — exact colors, specific renders, legible small text — remain a weak spot.",
      },
      {
        kind: "choice",
        emoji: "📋",
        prompt: "What's the most effective way to get AI-generated copy to match a specific brand voice?",
        options: ["Describe the tone using only abstract adjectives", "Paste in real example sentences plus a short voice guide", "Accept the first draft as final", "Avoid giving the AI any brand context"],
        correctIndex: 1,
        explain: "Concrete examples plus a short written guide give the model real patterns to match, working better than abstract description alone.",
      },
      {
        kind: "choice",
        emoji: "🔁",
        prompt: "In the \"Off-Brand Draft\" scenario, what ultimately fixed the recurring generic opening line problem?",
        options: ["Accepting the draft as good enough", "Rewriting everything from scratch each time", "Adding a specific rule about it to the brand voice guide", "Switching to a different AI tool entirely"],
        correctIndex: 2,
        explain: "Saving the specific correction to the voice guide meant every future draft started better, not just the one being edited.",
      },
      {
        kind: "blank",
        emoji: "🔍",
        sentence: "Before publishing an AI-drafted statistic or named source, you should always ___ it against a real, checkable source.",
        options: ["verify", "ignore", "exaggerate", "remove all context from"],
        correctIndex: 0,
        explain: "Any specific factual claim from AI output needs verification against a real source before it's published anywhere public.",
      },
      {
        kind: "choice",
        emoji: "🧩",
        prompt: "What's a good use of AI for a single 1,000-word blog post you've already written?",
        options: ["Deleting the original post", "Repurposing it into shorter formats like carousels, email blurbs, and social teasers", "Publishing it in ten different languages without review", "Removing all the original research from it"],
        correctIndex: 1,
        explain: "Repurposing long-form content into multiple shorter formats is one of the highest-leverage, lowest-risk uses of AI in content marketing.",
      },
    ],
  },
];

// ── Module 3 — Data, Targeting & Personalisation ─────────────────────────────
const module3: LessonContent[] = [
  {
    type: "read-reflect",
    lessonTitle: "How AI Targets and Segments Audiences",
    cards: [
      {
        emoji: "📑",
        headline: "Segmentation used to mean a spreadsheet",
        body: "Marketers historically split audiences into a handful of static groups — age bracket, region, past purchase category — updated occasionally by hand, sometimes just once a quarter when someone finally had time to refresh the spreadsheet. That cadence was a real constraint on how relevant any single message could be to any single person.",
      },
      {
        emoji: "📡",
        headline: "AI segments on live behaviour",
        body: "Modern targeting models watch real-time signals — what someone clicks, how long they linger, what they add to cart — and group people by behaviour patterns, not just fixed demographics. Two 35-year-olds in the same city can end up in completely different segments if their on-site behaviour looks different, a level of nuance a static spreadsheet could never capture.",
      },
      {
        emoji: "👥",
        headline: "Lookalike audiences, explained",
        body: "Instead of guessing who else might buy, models find new users who share patterns with your existing best customers — same platform, wider reach, similar fit. This turns \"who should we advertise to next\" from a demographic guess into a data-driven extension of who's already working for you.",
      },
      {
        emoji: "🔄",
        headline: "Segments update themselves",
        body: "A user can move between segments automatically as their behaviour changes — someone who was \"browsing\" yesterday can be \"high-intent\" today, without anyone manually re-tagging them. That real-time responsiveness is what makes modern targeting feel well-timed rather than a week behind what someone actually wants.",
      },
      {
        emoji: "🧭",
        headline: "More precision, more responsibility",
        body: "The more accurately you can target, the more important it becomes to ask whether a specific use of that precision still feels fair and respectful to the person on the other end. That's not a soft, optional add-on to good targeting — it's a theme we'll return to directly later in this module, because getting it wrong carries real reputational cost.",
      },
    ],
    reflectPrompt: "Can you think of a time an ad felt oddly well-targeted to you? What signal do you think triggered it?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📡",
        prompt: "What replaced the old approach of a handful of static, manually-built audience segments?",
        options: ["No segmentation at all", "Models that segment on live, real-time behaviour", "Printed customer surveys only", "Random assignment"],
        correctIndex: 1,
        explain: "Modern targeting models watch real-time behavioural signals rather than relying on a handful of fixed buckets.",
      },
      {
        kind: "choice",
        emoji: "👥",
        prompt: "What is a 'lookalike audience'?",
        options: ["A random sample of all users", "A group of new people who share patterns with your best existing customers", "Your competitor's exact customer list", "People in the same city as your store"],
        correctIndex: 1,
        explain: "Lookalike audiences use your existing customer data as a template to find similar new people.",
      },
      {
        kind: "blank",
        emoji: "🧭",
        sentence: "As targeting gets more precise, it becomes more important to ask whether a specific use of that precision still feels ___ to the person on the other end.",
        options: ["fair/respectful", "expensive", "fast", "colorful"],
        correctIndex: 0,
        explain: "More precise targeting raises the stakes on whether it still feels respectful, not just accurate.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Setting Up a Dynamic Audience Segment",
    toolName: "Segment",
    toolUrl: "https://segment.com",
    steps: [
      {
        title: "Define the behaviour that matters",
        body: "Start with one specific action, not a vague idea. \"Viewed a product page 3+ times in 7 days\" is buildable and testable; \"people who seem interested\" is not something any platform can actually act on.\n\nThe clearer and more specific the behaviour, the easier it is later to check whether the segment is actually working.",
      },
      {
        title: "Connect your data sources",
        body: "A customer data platform pulls events from your site, app, and email tool into one unified place, so a single customer's activity across channels can be seen as one person, not three disconnected records that never talk to each other. Without this step, segmentation stays fragmented no matter how good your rules are.",
      },
      {
        title: "Build the segment rule",
        body: "Set the actual condition — for example, \"viewed product page 3+ times AND has not purchased in 30 days\" — and the platform keeps the membership list updated automatically as behaviour changes, adding and removing people in real time with no manual maintenance.",
        tip: "Start narrow. A precise segment of 500 people beats a vague one of 50,000.",
      },
      {
        title: "Send it to your ad or email platform",
        body: "Sync the live segment to your ad platform or email tool so it updates automatically — no manual list exports needed once it's connected, and no risk of targeting someone based on a stale export from three weeks ago.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "First-Party Data After Third-Party Cookies",
    cards: [
      {
        emoji: "🍪",
        headline: "What third-party cookies used to do",
        body: "Third-party cookies let advertisers track a user's behaviour across many unrelated websites, building a cross-site profile without the user directly giving that specific site any information at all. This was, for a long time, the invisible backbone of how digital targeting worked.",
      },
      {
        emoji: "📉",
        headline: "Why they're going away",
        body: "Rising privacy regulation and browser-level blocking have phased out third-party cookie tracking, removing a data source marketers relied on for years, in some markets almost overnight. Teams that were entirely dependent on this single source had to rebuild their targeting approach essentially from scratch.",
      },
      {
        emoji: "🏠",
        headline: "First-party data is the replacement",
        body: "Data a company collects directly — email signups, purchase history, on-site behaviour, app activity — becomes the foundation for targeting and personalisation instead. This is data the customer has some awareness of sharing, which is part of why it's more durable against future privacy changes too.",
      },
      {
        emoji: "🧠",
        headline: "AI's role: doing more with less",
        body: "With less cross-site data available, predictive models are used to make smarter use of the first-party data a company already has — inferring likely interests instead of directly observing them elsewhere. The skill shifted from collecting more data to extracting more value from the data you're actually allowed to have.",
      },
      {
        emoji: "🤝",
        headline: "The net effect for marketers",
        body: "Targeting shifts from \"buy data about strangers\" toward \"earn direct relationships and use them well\" — a more effortful approach, since it requires giving customers a real reason to share information directly, but a more durable and privacy-respecting one in the long run.",
      },
    ],
    reflectPrompt: "What's one piece of first-party data your favourite brand probably already has about you — and could use to personalise your experience?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🍪",
        prompt: "What did third-party cookies previously let advertisers do?",
        options: ["Track a user's behaviour across many unrelated websites", "Send physical mail", "Print receipts", "Nothing useful"],
        correctIndex: 0,
        explain: "Third-party cookies built cross-site behavioural profiles without the user directly providing that data.",
      },
      {
        kind: "choice",
        emoji: "🏠",
        prompt: "What became the primary foundation for targeting after third-party cookies declined?",
        options: ["Random guessing", "First-party data collected directly by a company", "Nothing — targeting stopped", "Public phone books"],
        correctIndex: 1,
        explain: "Data collected directly — signups, purchases, on-site behaviour — became the new foundation.",
      },
      {
        kind: "blank",
        emoji: "🧠",
        sentence: "With less cross-site data available, predictive models help marketers do more with the ___ data a company already has.",
        options: ["first-party", "fake", "competitor's", "expired"],
        correctIndex: 0,
        explain: "AI helps make smarter use of first-party data rather than relying on cross-site tracking.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Build a Lookalike Audience Brief",
    intro: "Lookalike audiences work best when you can describe your best existing customers clearly. You'll practice writing that description, since a vague description of your best customers produces a vague, low-quality lookalike audience no matter how good the underlying algorithm is.",
    steps: [
      {
        open: true,
        prompt: "Think of a product (real or imagined). Describe your single best-performing existing customer segment in 2-3 sentences — who they are and why they're valuable, specifically enough that someone unfamiliar with your business could picture them.",
        placeholder: "e.g. Our best customers are...",
        modelAnswer: "Our best customers are working parents aged 30-45 who subscribe monthly rather than buying one-off, and who've referred at least one friend. They have a 3x higher lifetime value than one-time buyers and rarely churn once they hit month two, which makes the first 60 days the period most worth investing in.",
      },
      {
        open: false,
        prompt: "Write the brief you'd hand to an ad platform (or a media buyer) to build a lookalike audience based on that segment — specific enough that they wouldn't need to ask you a follow-up question.",
        placeholder: "e.g. Build a lookalike audience based on...",
        modelAnswer: "Build a 1% lookalike audience based on our list of subscribers who've been active for 60+ days and referred at least one friend. Exclude existing customers. Start with a single country or region to keep the sample tight before expanding to additional markets.",
      },
      {
        open: false,
        prompt: "What's one risk of relying too heavily on lookalike audiences instead of your own first-party data? Write 1-2 sentences explaining why this matters even when the lookalike audience is technically well-built.",
        placeholder: "e.g. One risk is...",
        modelAnswer: "Lookalike audiences can drift toward whoever the platform's algorithm finds easiest to match, which may not perfectly reflect why your original segment is actually valuable — worth testing against a control group of your own first-party targeting before scaling spend, rather than assuming the lookalike is automatically as good as the source.",
      },
    ],
    artifactTitle: "Your lookalike audience brief",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📝",
        prompt: "What should a good lookalike-audience brief describe first?",
        options: ["Your best-performing existing customer segment, clearly", "A list of random people", "Your competitor's ad budget", "Nothing specific"],
        correctIndex: 0,
        explain: "A lookalike audience is only as good as the description of the existing segment it's modeled on.",
      },
      {
        kind: "choice",
        emoji: "⚠️",
        prompt: "What's a risk of relying too heavily on lookalike audiences instead of first-party data, per this exercise?",
        options: ["They're always more expensive", "They can drift toward whoever the algorithm finds easiest to match, not necessarily who's actually valuable", "They never work at all", "They require no setup"],
        correctIndex: 1,
        explain: "Lookalike audiences can drift from what actually makes your original segment valuable.",
      },
      {
        kind: "blank",
        emoji: "🎯",
        sentence: "A good lookalike brief should start ___ before expanding to a wider audience.",
        options: ["narrow (e.g. one region)", "as broadly as possible", "with no target country", "with a random sample"],
        correctIndex: 0,
        explain: "Starting narrow keeps the initial sample tight before scaling up.",
      },
    ],
  },
  {
    type: "quiz",
    lessonTitle: "Personalisation at Scale",
    questions: [
      {
        kind: "choice",
        emoji: "🎯",
        prompt: "What does AI-powered personalisation primarily use to tailor content to each visitor?",
        options: [
          "A fixed set of rules written by marketers",
          "User behaviour and data patterns",
          "Random selection between a few templates",
          "Whatever performed best last year",
        ],
        correctIndex: 1,
        explain: "Personalisation engines learn from real-time signals like clicks, dwell time, and purchase history — not fixed rules.",
      },
      {
        kind: "choice",
        emoji: "🛍️",
        prompt: "A retailer shows different homepage banners to different visitors based on their past browsing. This is an example of:",
        options: ["Static targeting", "Dynamic segmentation", "Broadcast marketing", "Manual curation"],
        correctIndex: 1,
        explain: "Dynamic segmentation groups users on the fly using live behavioural data, instead of one fixed audience for everyone.",
      },
      {
        kind: "choice",
        emoji: "🤖",
        prompt: "True or false: AI personalisation means you write one ad, and the system automatically generates variants tailored to different audiences.",
        options: ["True", "False"],
        correctIndex: 0,
        explain: "Modern ad platforms can auto-generate and test dozens of creative variants against different audience segments from a single input.",
      },
      {
        kind: "choice",
        emoji: "😬",
        prompt: "Which of these is a real risk of over-personalisation?",
        options: [
          "Higher engagement across the board",
          "Users feeling surveilled or 'creeped out'",
          "Lower operating costs",
          "Faster content production",
        ],
        correctIndex: 1,
        explain: "When personalisation feels too precise, it can cross from 'helpful' into 'invasive' — trust matters as much as relevance.",
      },
      {
        kind: "choice",
        emoji: "👥",
        prompt: "What's a 'lookalike audience' in AI-driven targeting?",
        options: [
          "A random sample of every user",
          "A group that mirrors traits of your best existing customers",
          "Your competitor's customer base",
          "Anyone in the same city as your store",
        ],
        correctIndex: 1,
        explain: "Lookalike audiences use your existing customer data as a template to find new people with similar patterns.",
      },
      {
        kind: "choice",
        emoji: "⏱️",
        prompt: "Which data signal is most useful for real-time personalisation?",
        options: [
          "Last year's annual report",
          "Current on-site behaviour, like clicks and dwell time",
          "Your company's org chart",
          "Static demographic averages",
        ],
        correctIndex: 1,
        explain: "Real-time personalisation leans on what a user is doing right now — recency beats broad averages.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "The Personalisation Line",
    beats: [
      {
        kind: "narrative",
        emoji: "🛒",
        body: "You run marketing for an online retailer. Your personalisation engine is excellent — it tracks browsing behaviour closely enough to show each visitor almost exactly what they were considering buying, sometimes down to the specific product variant they lingered on.",
      },
      {
        kind: "decision",
        prompt: "A customer browsed baby products once, out of curiosity for a friend's baby shower gift — never again. Your system starts showing her baby ads on every site she visits for weeks afterward. Do you let this run, or adjust it?",
        choices: [
          {
            label: "Let it run — the targeting is technically accurate to her browsing history",
            outcome: "You let it run since the targeting is technically accurate to her browsing history. A support ticket comes in a few weeks later: she found it upsetting, given her personal circumstances, which the system had no way of knowing about. Accuracy alone wasn't the same as sensitivity.",
          },
          {
            label: "Adjust the system to decay interest signals faster for sensitive categories",
            outcome: "You adjust the system to decay interest signals faster for sensitive categories. A few fewer ad impressions get shown as a result, but you avoid a real category of complaints — categories like baby products, health, and family planning now get a shorter memory window than, say, sneakers or electronics.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🧭",
        body: "This is the line this module keeps coming back to: technically precise personalisation can still feel invasive, especially around sensitive life moments the system has no real way of understanding or accounting for.",
      },
      {
        kind: "decision",
        prompt: "Your team proposes a general policy: some categories — health, family, finances — get shorter tracking windows and lighter retargeting than everyday product categories. Do you support it, even though it'll slightly lower short-term retargeting performance in those categories?",
        choices: [
          {
            label: "Support it — trust is worth more than a small performance dip",
            outcome: "You support it, reasoning trust is worth more than a small performance dip. Retargeting revenue from those categories dips slightly, but complaint volume drops and brand sentiment around privacy improves measurably over the quarter.",
          },
          {
            label: "Push back — every category should be optimised the same way for performance",
            outcome: "You push back, arguing every category should be optimised the same way for performance. Short-term numbers hold steady, but customer trust surveys show a small, persistent dip specifically in the categories people are most sensitive about.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "💬",
        body: "Personalisation doesn't have one universal \"too far\" line — it depends on what's being targeted and how someone might reasonably feel about it given their own circumstances. Building category-aware limits is part of doing personalisation responsibly, not some kind of tax on performance you're paying reluctantly.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🛒",
        prompt: "In the scenario, why did showing continued baby-product ads to a one-time browser become a problem?",
        options: ["It was too slow to load", "It felt invasive given her actual circumstances, despite being technically accurate targeting", "It cost too much money", "It broke the website"],
        correctIndex: 1,
        explain: "Technically accurate targeting still felt invasive around a sensitive personal circumstance.",
      },
      {
        kind: "choice",
        emoji: "🧭",
        prompt: "What policy did the team adopt for sensitive categories like health and family?",
        options: ["Track them exactly the same as sneakers", "Shorter tracking windows and lighter retargeting", "No tracking of any kind, ever", "Double the retargeting frequency"],
        correctIndex: 1,
        explain: "Sensitive categories got shorter memory windows and lighter retargeting than everyday products.",
      },
      {
        kind: "blank",
        emoji: "💬",
        sentence: "Technically precise personalisation can still feel ___, especially around sensitive life moments.",
        options: ["invasive", "cheap", "slow", "irrelevant"],
        correctIndex: 0,
        explain: "Precision and appropriateness aren't the same thing — sensitive moments need extra care.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Configuring Real-Time Personalisation Rules",
    toolName: "Dynamic Yield",
    toolUrl: "https://www.dynamicyield.com",
    steps: [
      {
        title: "Pick one moment to personalise first",
        body: "Don't try to personalise your entire site at once — start with one high-traffic moment, like the homepage hero banner for returning visitors, where a change is easy to measure and easy to roll back if it doesn't work.",
      },
      {
        title: "Define the trigger condition",
        body: "Set the rule plainly: \"if visitor viewed [category] in the last session and did not purchase, show [related banner].\" Specific triggers like this are easier to test and debug than broad, vague ones, and easier to explain to a teammate reviewing your setup later.",
      },
      {
        title: "Set a decay window per category",
        body: "Choose how long a signal stays \"active\" before it stops influencing personalisation — shorter for sensitive categories, longer for low-stakes ones like general browsing. This single setting is where most \"personalisation felt invasive\" complaints actually get prevented.",
        tip: "When in doubt, default to a shorter decay window — it's easier to lengthen later than to walk back something that felt invasive.",
      },
      {
        title: "Test against a control group",
        body: "Always run personalised experiences against a non-personalised control group for at least a few weeks, so you can measure the actual lift instead of assuming it's working just because it feels more sophisticated.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "Predictive Analytics in Plain English",
    cards: [
      {
        emoji: "🎲",
        headline: "A propensity score is just a probability",
        body: "When a system says a customer has a \"73% propensity to churn,\" it means the model estimates a 73% likelihood based on patterns from similar past customers — not a certainty, and not magic. Treating it as a hard prediction rather than a probability is one of the most common mistakes teams make with these tools.",
      },
      {
        emoji: "🚩",
        headline: "Churn prediction: catching it before it happens",
        body: "Models flag customers showing early signs common to people who've left before — reduced logins, expired support tickets, skipped renewals — so a team can intervene while there's still time to actually save the relationship, rather than finding out only after the customer has already cancelled.",
      },
      {
        emoji: "💰",
        headline: "Lifetime value (LTV) modelling",
        body: "Instead of treating every new customer the same, LTV models estimate how much revenue a customer is likely to generate over time, helping teams decide how much to spend acquiring different types of customers rather than applying one acquisition budget uniformly across everyone.",
      },
      {
        emoji: "🕰️",
        headline: "Models are trained on the past",
        body: "Every prediction is built from historical patterns — which means a genuinely new kind of customer, or a sudden market shift, can fool a model that's never seen anything like it before. This is worth remembering any time a prediction feels surprisingly confident about something unprecedented.",
      },
      {
        emoji: "🧑‍⚖️",
        headline: "Use scores to prioritise, not to decide blindly",
        body: "A high churn-risk score is a reason to look closer at an account, not an automatic verdict — the best teams treat these scores as a starting point for human judgment, not a replacement for it, especially for high-value accounts where a wrong call is expensive.",
      },
    ],
    reflectPrompt: "If you ran a subscription business, what's one early-warning signal you'd want a churn model to watch for?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🎲",
        prompt: "What does a '73% propensity to churn' score actually represent?",
        options: ["A guaranteed outcome", "An estimated likelihood based on patterns from similar past customers", "An exact refund amount", "A random number"],
        correctIndex: 1,
        explain: "Propensity scores are probability estimates, not certainties.",
      },
      {
        kind: "choice",
        emoji: "🧑‍⚖️",
        prompt: "How should churn-risk scores be used, per this lesson?",
        options: ["As an automatic verdict requiring no human review", "As a starting point for human judgment, not a replacement for it", "They should be ignored entirely", "Only for marketing to competitors"],
        correctIndex: 1,
        explain: "Scores are meant to guide human judgment, not replace it.",
      },
      {
        kind: "blank",
        emoji: "🕰️",
        sentence: "Because predictive models are trained on the past, a genuinely new kind of customer or sudden market shift can ___ a model that's never seen anything like it.",
        options: ["fool", "improve", "ignore", "delete"],
        correctIndex: 0,
        explain: "Models trained on historical patterns can be caught off guard by genuinely new situations.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Write a Segment-Specific Message",
    intro: "The same offer often needs different framing for different audience segments. You'll write three versions of one message, since the biggest personalisation wins usually come from message framing, not from changing the underlying offer itself.",
    steps: [
      {
        open: true,
        prompt: "The offer: 20% off your next order for anyone who hasn't purchased in 90+ days. Write a version of this message aimed at a segment who left because of price sensitivity — someone who liked the product but felt it wasn't worth the cost.",
        placeholder: "e.g. We've made it easier to come back...",
        modelAnswer: "Come back and save: 20% off your next order, on us. No minimum spend, no strings — just a better price on the products you already liked, available whenever you're ready to shop again.",
      },
      {
        open: false,
        prompt: "Now write a version aimed at a segment who left because they simply forgot about the brand (still like it, just drifted away) — a segment that needs re-introduction, not a discount pitch.",
        placeholder: "e.g. It's been a while — here's what's new...",
        modelAnswer: "It's been a minute! Here's 20% off to make it easy to pick up right where you left off — plus a few new things we think you'll like just as much as before, in case you missed what's changed.",
      },
      {
        open: false,
        prompt: "Finally, write a version for a segment who left after a bad experience (a late delivery or support issue) — this version needs a tone of acknowledgment and reassurance, not just a discount.",
        placeholder: "e.g. We know things didn't go perfectly last time...",
        modelAnswer: "We know your last order didn't go the way it should have — we've made changes since. Here's 20% off your next order, and our team is directly reachable if anything's ever off again, because we'd rather hear from you than lose you quietly.",
      },
    ],
    artifactTitle: "Three segment-specific versions of one offer",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "💌",
        prompt: "Why does the same win-back offer need different framing for different customer segments?",
        options: ["Because customers left for different reasons — price, forgetting, or a bad experience", "Because the offer amount changes", "Because it's required by law", "Because segments never respond to offers"],
        correctIndex: 0,
        explain: "Different reasons for disengaging call for different framing, even with the same underlying offer.",
      },
      {
        kind: "choice",
        emoji: "🤝",
        prompt: "What tone fits a segment that left after a bad experience like a late delivery?",
        options: ["Purely price-focused with no acknowledgment", "One that acknowledges what went wrong and offers reassurance", "An angry, accusatory tone", "No message at all"],
        correctIndex: 1,
        explain: "Acknowledging the past issue and offering reassurance fits this segment better than a pure discount pitch.",
      },
      {
        kind: "blank",
        emoji: "🎯",
        sentence: "Segment-specific messaging adjusts the ___ of the same underlying offer to match why each group disengaged.",
        options: ["framing/tone", "price only", "product name", "currency"],
        correctIndex: 0,
        explain: "The offer stays the same — what changes is how it's framed for each segment.",
      },
    ],
  },
  {
    type: "quiz",
    lessonTitle: "Module 3 Final Check-In",
    questions: [
      {
        kind: "choice",
        emoji: "🎯",
        prompt: "What replaced third-party cookies as the primary foundation for audience targeting?",
        options: ["Random guessing", "First-party data collected directly by a company", "Printed customer surveys only", "Nothing — targeting stopped entirely"],
        correctIndex: 1,
        explain: "As third-party cookie tracking phased out, first-party data — collected directly through signups, purchases, and on-site behaviour — became the primary foundation for targeting.",
      },
      {
        kind: "blank",
        emoji: "📊",
        sentence: "A churn 'propensity score' of 73% means the model estimates a 73% ___ based on patterns from similar past customers, not a certainty.",
        options: ["likelihood", "guarantee", "refund amount", "discount percentage"],
        correctIndex: 0,
        explain: "Propensity scores are probability estimates from pattern-matching, not guarantees — they should guide human judgment, not replace it.",
      },
      {
        kind: "choice",
        emoji: "🧭",
        prompt: "In the 'Personalisation Line' scenario, why did the team shorten tracking windows for sensitive categories like baby products?",
        options: ["To reduce server costs", "Because technically accurate targeting can still feel invasive around sensitive life moments", "Because the ad platform required it", "To increase short-term ad revenue"],
        correctIndex: 1,
        explain: "The scenario's core lesson: precision alone doesn't guarantee a personalised experience feels appropriate — sensitive categories need shorter memory windows.",
      },
      {
        kind: "choice",
        emoji: "🔧",
        prompt: "When setting up real-time personalisation rules, what should you always test personalised experiences against?",
        options: ["Nothing — just launch and assume it works", "A non-personalised control group", "Only your best customers", "A competitor's website"],
        correctIndex: 1,
        explain: "Testing against a control group is the only way to measure the actual lift personalisation provides, rather than assuming it.",
      },
      {
        kind: "blank",
        emoji: "💌",
        sentence: "The same win-back offer needs different ___ depending on why a customer originally left — price sensitivity, forgetting, or a bad experience all call for different tones.",
        options: ["framing", "price", "product", "logo"],
        correctIndex: 0,
        explain: "Segment-specific messaging means adjusting the framing and tone of the same underlying offer to match why each group disengaged.",
      },
      {
        kind: "choice",
        emoji: "🕸️",
        prompt: "What is a Customer Data Platform (CDP) used for in the segmentation workflow?",
        options: ["Designing logos", "Connecting data from multiple sources into one unified customer view", "Replacing the need for any human marketer", "Only sending cold email"],
        correctIndex: 1,
        explain: "A CDP unifies events and data from multiple channels — site, app, email — into one customer view so segments can be built on complete behaviour, not fragments.",
      },
    ],
  },
];

// ── Module 4 — AI Tools for Campaigns ─────────────────────────────────────────
const module4: LessonContent[] = [
  {
    type: "read-reflect",
    lessonTitle: "Programmatic Buying and Automated Bidding, Explained",
    cards: [
      {
        emoji: "🛒",
        headline: "Programmatic buying, in one sentence",
        body: "Ad space is bought and sold automatically through software, in real time, instead of humans negotiating placements deal by deal the way advertising worked for most of the 20th century. This shift happened almost entirely behind the scenes, which is part of why so few marketers can actually explain it in detail even though it now touches nearly every digital ad they run.",
      },
      {
        emoji: "⚡",
        headline: "What happens in the milliseconds before an ad loads",
        body: "When a webpage loads, an automated auction runs in real time — advertisers' systems bid for that exact impression based on what's known about the visitor, and the winning ad appears before the page finishes loading. This entire auction, from request to winning bid to rendered ad, typically completes in well under a second.",
      },
      {
        emoji: "📈",
        headline: "Automated bidding sets the price for you",
        body: "Instead of a human setting a fixed bid, an algorithm adjusts bids constantly based on how likely a given impression is to convert — bidding more for promising opportunities, less for weak ones. The system is effectively running thousands of tiny pricing decisions per minute, far more than any team could review individually.",
      },
      {
        emoji: "🧭",
        headline: "The marketer's job moves up a level",
        body: "Rather than manually setting bids, marketers set goals and guardrails — target cost-per-acquisition, daily budget caps, which audiences to include — and let the system optimise within them. The job shifted from \"set the price\" to \"define what counts as a win,\" which is a genuinely different skill.",
      },
      {
        emoji: "🚧",
        headline: "Guardrails still matter",
        body: "Automated bidding optimises hard for whatever goal it's given — if the goal or budget cap is set carelessly, the system will efficiently pursue the wrong thing just as fast as the right one. A poorly worded goal doesn't just underperform quietly; it can actively waste budget at speed.",
      },
    ],
    reflectPrompt: "If you were setting guardrails for an automated bidding campaign, what's one boundary you'd want in place before letting it run unsupervised?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🛒",
        prompt: "What is 'programmatic buying'?",
        options: ["Humans manually negotiating every ad placement", "Ad space bought and sold automatically through software in real time", "Buying ads once a year", "Print-only advertising"],
        correctIndex: 1,
        explain: "Programmatic buying automates ad-space purchasing through real-time software auctions.",
      },
      {
        kind: "choice",
        emoji: "🧭",
        prompt: "In automated bidding, what do marketers set instead of manually setting each bid?",
        options: ["Goals and guardrails, like target cost-per-acquisition and budget caps", "Nothing at all", "The exact bid for every single impression", "Only the ad's font"],
        correctIndex: 0,
        explain: "Marketers define goals and boundaries; the algorithm adjusts individual bids within them.",
      },
      {
        kind: "blank",
        emoji: "🚧",
        sentence: "Automated bidding optimises hard for whatever goal it's given — careless goals get pursued just as efficiently as the ___ ones.",
        options: ["right", "cheap", "colorful", "slow"],
        correctIndex: 0,
        explain: "The system pursues whatever goal it's given, correct or not, with equal efficiency.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Automating Ad Variant Testing",
    toolName: "Meta Ads Manager",
    toolUrl: "https://www.facebook.com/business/tools/ads-manager",
    steps: [
      {
        title: "Upload multiple creative variants at once",
        body: "Instead of running one static ad, upload several versions of the headline, image, and copy — the platform's dynamic creative feature assembles and tests combinations automatically, often trying dozens of combinations you'd never have time to test manually.",
      },
      {
        title: "Let the system find the best-performing combination",
        body: "The platform shows different combinations to different segments and shifts spend toward whichever performs best, faster than a manual A/B test could, since it's reallocating budget continuously rather than waiting for a fixed test period to end.",
      },
      {
        title: "Keep one variable intentional",
        body: "Even in automated testing, decide in advance what you're actually trying to learn — for example, \"does a question-based headline outperform a statement-based one?\" — so the results teach you something reusable for the next campaign, not just a one-off winner.",
        tip: "Testing without a hypothesis just produces a winner, not a lesson.",
      },
      {
        title: "Review the losing variants too",
        body: "Don't just look at what won — a variant that underperformed clearly, not just narrowly, often reveals something worth avoiding in future campaigns. The losers are often more instructive than the winner, since a clear failure usually points at a specific mistake you can name.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Build a Campaign Brief with AI",
    intro: "A clear campaign brief is the foundation everything else gets built from. You'll draft one step by step, since a vague brief tends to produce vague creative, vague targeting, and a campaign nobody can actually evaluate afterward.",
    steps: [
      {
        open: true,
        prompt: "Describe the campaign goal in one sentence — what specific outcome are you driving toward, for what product, in what timeframe? Vague goals like \"raise awareness\" don't give a campaign anything concrete to be measured against.",
        placeholder: "e.g. Drive 500 trial signups for our new app feature in 3 weeks",
        modelAnswer: "Drive 500 free-trial signups for our new budgeting feature within 3 weeks of launch, primarily from existing app users who haven't tried it yet.",
      },
      {
        open: false,
        prompt: "Describe the target audience in 1-2 sentences — who specifically should this campaign reach, and roughly how many of them are there?",
        placeholder: "e.g. Existing users who...",
        modelAnswer: "Existing app users, active in the last 30 days, who have never opened the budgeting feature — roughly 40,000 people across our user base.",
      },
      {
        open: false,
        prompt: "List the key message and one thing this campaign must NOT do (a constraint, tone rule, or compliance note) — the kind of guardrail that prevents an avoidable mistake later.",
        placeholder: "e.g. Key message: ... Must not: ...",
        modelAnswer: "Key message: budgeting doesn't have to be a chore — this feature does the categorising for you. Must not: make any specific claim about savings amounts, since we don't have verified data to back a number yet.",
      },
    ],
    artifactTitle: "Your campaign brief",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🎯",
        prompt: "What should a campaign goal statement include, per this exercise?",
        options: ["A specific outcome, product, and timeframe", "Only a vague wish", "The CEO's name", "Nothing measurable"],
        correctIndex: 0,
        explain: "A clear goal names the outcome, the product, and the timeframe, not a vague aspiration.",
      },
      {
        kind: "choice",
        emoji: "🚫",
        prompt: "Why include a 'must not' constraint in a campaign brief?",
        options: ["To make the brief longer", "To flag compliance or tone risks, like unverified claims, upfront", "It's not useful at all", "To confuse the team"],
        correctIndex: 1,
        explain: "Naming a constraint upfront prevents avoidable risks like unverified claims from slipping into the campaign.",
      },
      {
        kind: "blank",
        emoji: "🧱",
        sentence: "A clear campaign brief is the ___ everything else in the campaign gets built from.",
        options: ["foundation", "afterthought", "budget line", "logo"],
        correctIndex: 0,
        explain: "Everything downstream — creative, targeting, measurement — builds on a clear brief.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "AI in Email Marketing",
    cards: [
      {
        emoji: "🕐",
        headline: "Send-time optimisation",
        body: "Instead of blasting every subscriber at 9am regardless of their habits, models predict the time each individual recipient is most likely to open an email, and stagger sends accordingly across the day. A subscriber who reliably checks email at 7pm gets their message then, not twelve hours earlier when it'll sit unread.",
      },
      {
        emoji: "🧪",
        headline: "Subject line testing at scale",
        body: "AI tools can generate and test many subject line variants automatically, learning which phrasing patterns perform best for a given list, faster than manually A/B testing a handful of options one campaign at a time. Over months, this compounds into a genuinely data-informed sense of what your specific audience responds to.",
      },
      {
        emoji: "📬",
        headline: "Predictive segmentation for email",
        body: "Models can flag subscribers likely to churn from your list, or likely to convert on a specific offer, letting campaigns target the right group instead of emailing everyone the same generic message regardless of where they actually are in their relationship with the brand.",
      },
      {
        emoji: "⚠️",
        headline: "Where it can go wrong",
        body: "Over-optimising purely for open rates can produce clickbait-y subject lines that erode trust over time, even as the open-rate number itself looks great on a dashboard. The metric that actually matters is long-term engagement, not just a short-term open-rate bump that quietly costs you unsubscribes down the line.",
      },
    ],
    reflectPrompt: "Have you ever unsubscribed from a list because the subject lines started feeling like clickbait? What made it feel that way?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🕐",
        prompt: "What is 'send-time optimisation'?",
        options: ["Sending every email at exactly 9am", "Predicting the best individual time to send each subscriber an email", "Deleting old email lists", "Writing subject lines once a year"],
        correctIndex: 1,
        explain: "Send-time optimisation predicts each recipient's best individual open time and staggers sends accordingly.",
      },
      {
        kind: "choice",
        emoji: "⚠️",
        prompt: "What's a risk of over-optimising email purely for open rate?",
        options: ["Emails become too short", "Subject lines can turn clickbait-y and erode trust over time", "Open rates always improve with no downside", "Nothing, it's risk-free"],
        correctIndex: 1,
        explain: "Chasing open rate alone can produce clickbait subject lines that damage trust over time.",
      },
      {
        kind: "blank",
        emoji: "📈",
        sentence: "The metric that matters most for email is long-term ___, not just a short-term open-rate bump.",
        options: ["engagement", "font size", "server cost", "spam score"],
        correctIndex: 0,
        explain: "Sustained engagement matters more than a short-term spike in opens.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Setting Up Send-Time Optimisation",
    toolName: "Mailchimp",
    toolUrl: "https://mailchimp.com",
    steps: [
      {
        title: "Turn on send-time optimisation for one campaign first",
        body: "Rather than switching your whole program over at once, test it on a single upcoming campaign to see how results compare to your usual fixed send time before rolling it out everywhere.",
      },
      {
        title: "Give the tool enough send history to learn from",
        body: "Send-time prediction needs a history of opens per subscriber to work well — very new lists or inactive subscribers may not have enough signal yet, so results will be more reliable for an established list than a brand-new one.",
      },
      {
        title: "Compare against a control group",
        body: "Hold out a small segment on your usual fixed send time so you have a fair comparison, instead of assuming the optimised version is better just because it's newer and more sophisticated-sounding.",
        tip: "A few weeks of comparison data is worth more than a gut feeling either way.",
      },
      {
        title: "Watch engagement, not just opens",
        body: "A higher open rate only matters if clicks and conversions hold up too — check the full funnel before declaring the feature a win, since it's entirely possible to raise opens while conversions stay flat or even drop.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "The Budget Reallocation Call",
    beats: [
      {
        kind: "narrative",
        emoji: "💸",
        body: "Your automated bidding system has been steadily shifting budget away from your usual best-performing campaign and toward a newer one you just launched last week, and the shift has been large enough to notice on the dashboard.",
      },
      {
        kind: "decision",
        prompt: "The shift is unexpected and a little unsettling — the new campaign has far less history to judge it by than the one it's pulling budget from. Do you let the system keep reallocating, or manually cap its budget while you figure out what's going on?",
        choices: [
          {
            label: "Let it keep reallocating — trust the real-time signal over your prior assumption",
            outcome: "You let it keep reallocating, trusting the real-time signal over your prior assumption. By the end of the week, the new campaign is outperforming the old one on cost-per-acquisition — it turns out your \"usual best performer\" had just started fatiguing after running for months.",
          },
          {
            label: "Manually cap the new campaign's budget to be safe",
            outcome: "You manually cap the new campaign's budget to be safe. You avoid any risk of overspending on an unproven campaign, but also miss a full week of the strongest performance you'll see from it before the audience saturates and returns normalise.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🔍",
        body: "You decide to check the actual conversion data behind the reallocation rather than going on instinct alone, pulling up the raw numbers instead of just watching the spend chart move.",
      },
      {
        kind: "decision",
        prompt: "The data shows the new campaign really is converting better, but the sample size is still fairly small — is a week of strong performance enough to trust it fully, or does it need more time?",
        choices: [
          {
            label: "Trust it, but keep monitoring daily rather than setting and forgetting",
            outcome: "You trust it, but keep monitoring daily rather than setting and forgetting. The trend holds for another two weeks, confirming it wasn't a fluke — daily monitoring meant you'd have caught it quickly if it had reversed instead.",
          },
          {
            label: "Wait for a much larger sample before trusting the shift at all",
            outcome: "You wait for a much larger sample before trusting the shift at all. By the time you're fully convinced, the campaign's novelty has worn off and performance has normalised — you spent the strongest window being cautious instead of capturing it.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "⚖️",
        body: "Automated bidding systems react to real signals faster than a human reasonably can — but \"faster\" isn't the same as \"infallible.\" The right habit is neither blind trust nor reflexive override: check the data behind a surprising shift, then decide with actual evidence rather than gut instinct in either direction.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "⚖️",
        prompt: "What was the recommended response to the surprising automated bidding shift?",
        options: ["Blindly trust it with no follow-up", "Check the actual conversion data, then decide with evidence", "Immediately override it based on instinct alone", "Ignore the campaign entirely"],
        correctIndex: 1,
        explain: "Neither blind trust nor reflexive override — checking real data leads to a better decision.",
      },
      {
        kind: "choice",
        emoji: "📈",
        prompt: "What turned out to be true about the newer campaign the system favoured?",
        options: ["It was actually underperforming", "It was genuinely converting better — the 'usual best performer' had started fatiguing", "It had no data at all", "It was a duplicate of the old campaign"],
        correctIndex: 1,
        explain: "Checking the data confirmed the reallocation was justified, not a fluke.",
      },
      {
        kind: "blank",
        emoji: "⚡",
        sentence: "Automated bidding reacts to real signals fast, but 'faster' isn't the same as ___.",
        options: ["infallible", "cheap", "free", "illegal"],
        correctIndex: 0,
        explain: "Speed doesn't guarantee correctness — surprising shifts still deserve a data check.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Write Three Ad Variants for One Audience",
    intro: "Even for a single audience, testing multiple angles on the same offer reveals what actually resonates. You'll draft three distinct ad variants, since assuming you already know the winning angle is one of the most common — and expensive — mistakes in paid media.",
    steps: [
      {
        open: true,
        prompt: "The offer: a productivity app's annual plan, 30% off for new users this week only. Write an ad variant that leads with the discount — the most obvious, straightforward angle.",
        placeholder: "e.g. Save 30% this week only...",
        modelAnswer: "30% off your first year, this week only. Get organised and keep the savings — annual plans start at less than $5/month during launch week.",
      },
      {
        open: false,
        prompt: "Now write a variant for the same offer that leads with a specific pain point instead of the price — naming the frustration before mentioning the deal at all.",
        placeholder: "e.g. Tired of losing track of...",
        modelAnswer: "Stop losing track of what actually matters. Our annual plan — 30% off this week — puts every task, deadline, and note in one place you'll actually check.",
      },
      {
        open: false,
        prompt: "Finally, write a variant that leads with social proof or a specific outcome, rather than price or pain point — borrowing credibility from other users instead of making a claim yourself.",
        placeholder: "e.g. Join 200,000 people who...",
        modelAnswer: "Join over 200,000 people who've simplified their week with our app. This week only: 30% off your first year to get started.",
      },
    ],
    artifactTitle: "Three ad variants, one audience, three angles",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🧪",
        prompt: "Why write three different ad variants for the same audience and offer?",
        options: ["To see which angle — price, pain point, or social proof — actually resonates", "Because one ad is against platform rules", "To confuse the algorithm", "It's purely decorative"],
        correctIndex: 0,
        explain: "Testing different angles reveals what actually resonates rather than assuming one approach works best.",
      },
      {
        kind: "choice",
        emoji: "🎯",
        prompt: "What's an example of leading with 'pain point' rather than price?",
        options: ["Naming the specific frustration the product solves before mentioning price", "Only mentioning the discount percentage", "Listing legal disclaimers first", "Describing the company's history"],
        correctIndex: 0,
        explain: "Pain-point-led copy names the problem before the offer, rather than leading with the discount.",
      },
      {
        kind: "blank",
        emoji: "🔍",
        sentence: "Testing multiple ad angles for one audience reveals what actually ___, rather than assuming one angle works best.",
        options: ["resonates", "costs the most", "loads fastest", "looks best in dark mode"],
        correctIndex: 0,
        explain: "The point of variant testing is discovering what genuinely connects with the audience.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "Chatbots and Conversational Marketing",
    cards: [
      {
        emoji: "⚡",
        headline: "What AI chatbots are actually good at",
        body: "AI chatbots are genuinely good at answering repetitive, well-defined questions instantly — order status, return policy, product specs — freeing human support and sales teams for conversations that actually need real judgment and can't be scripted in advance.",
      },
      {
        emoji: "🧭",
        headline: "Qualifying leads before a human gets involved",
        body: "A chatbot can ask a few structured questions to understand what a visitor needs and route them to the right resource or person, instead of every inquiry landing in one undifferentiated queue where urgent issues wait behind routine ones.",
      },
      {
        emoji: "🌀",
        headline: "Where they still struggle",
        body: "Where they still struggle is emotionally charged situations, ambiguous or multi-part questions, and anything requiring real discretion or empathy. A frustrated customer typically wants to feel heard by a person, not routed through another script that doesn't acknowledge what actually went wrong.",
      },
      {
        emoji: "🤝",
        headline: "The best setups know when to hand off",
        body: "Well-designed conversational systems escalate to a human quickly once a conversation gets complicated or emotional, rather than trying to resolve everything automatically and risking making a bad situation worse by delaying the handoff.",
      },
    ],
    reflectPrompt: "Think of the last time you used a chatbot. Did it resolve your issue, or did you end up needing a human anyway — and at what point did that become clear?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "⚡",
        prompt: "What are AI chatbots generally good at, per this lesson?",
        options: ["Answering repetitive, well-defined questions instantly", "Handling any emotionally complex situation flawlessly", "Replacing all human judgment", "Making legal decisions"],
        correctIndex: 0,
        explain: "Chatbots excel at fast answers to repetitive, well-defined questions.",
      },
      {
        kind: "choice",
        emoji: "🤝",
        prompt: "What should well-designed conversational systems do when a conversation gets complicated or emotional?",
        options: ["Keep trying to resolve it automatically forever", "Escalate to a human quickly", "End the conversation with no response", "Repeat the same script louder"],
        correctIndex: 1,
        explain: "Good systems recognize when to hand off to a human rather than looping through scripts.",
      },
      {
        kind: "blank",
        emoji: "💬",
        sentence: "A frustrated customer typically wants to feel ___ by a person, not routed through another script.",
        options: ["heard", "billed", "ignored", "delayed"],
        correctIndex: 0,
        explain: "Emotionally charged situations usually call for a human who can actually listen.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "The Chatbot Escalation",
    beats: [
      {
        kind: "narrative",
        emoji: "💬",
        body: "Your website's AI chatbot handles most order-status questions smoothly. Tonight, a customer messages in clearly frustrated: their order arrived damaged, and it was a gift for a family event happening tomorrow — a situation with real emotional stakes and a hard deadline.",
      },
      {
        kind: "decision",
        prompt: "The chatbot is confident it can help — it offers a standard replacement-order workflow. Given the emotional urgency and the tight timeline, should it keep handling this, or escalate to a human immediately?",
        choices: [
          {
            label: "Let the chatbot try the standard replacement workflow first",
            outcome: "You let the chatbot try the standard replacement workflow first. The customer, already stressed about the timing, gets frustrated typing through several scripted steps before finally reaching a human anyway — losing several minutes they genuinely didn't have.",
          },
          {
            label: "Escalate immediately given the emotional urgency and time pressure",
            outcome: "You escalate immediately given the emotional urgency and time pressure. A human agent reaches the customer in under two minutes, expedites a replacement, and offers a same-day local pickup option the chatbot's workflow didn't even have as a choice.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🚦",
        body: "This is exactly the kind of moment conversational AI should be designed to recognise: specific emotional and time-sensitive signals — words like \"tomorrow,\" \"gift,\" and \"damaged\" appearing together — that call for an immediate human handoff rather than a standard flow.",
      },
      {
        kind: "decision",
        prompt: "Your team is designing the next version of the chatbot's escalation rules. Should escalation triggers be based only on keywords, or also on broader signals like repeated frustrated messages and conversation length?",
        choices: [
          {
            label: "Keywords only — simpler to build and audit",
            outcome: "You go with keywords only, since it's simpler to build and audit. The system catches obvious cases well but misses a customer who's clearly frustrated without using any of the flagged words — a near-miss that gets reported afterward.",
          },
          {
            label: "Combine keywords with broader signals like repeated frustration and message length",
            outcome: "You combine keywords with broader signals like repeated frustration and message length. The system catches a wider range of distressed conversations, including ones that don't use an exact trigger word — a more expensive rule to maintain, but a meaningfully better safety net.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🤝",
        body: "Good conversational AI isn't measured only by how much it resolves on its own — it's also measured by how reliably it recognises the moments it shouldn't try to handle alone, and hands them off before things get worse rather than after.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🎁",
        prompt: "What made this situation one that called for immediate human escalation?",
        options: ["The order was a normal reorder request", "Emotional urgency and time pressure — a damaged gift needed for an event the next day", "The customer used polite language", "The order was very inexpensive"],
        correctIndex: 1,
        explain: "The combination of emotional stakes and a hard deadline signaled the need for a human immediately.",
      },
      {
        kind: "choice",
        emoji: "🚚",
        prompt: "What did the human agent do that the chatbot's standard workflow didn't offer?",
        options: ["Nothing different", "Offered a same-day local pickup option", "Refused to help at all", "Charged an extra fee"],
        correctIndex: 1,
        explain: "The human agent found a solution — same-day pickup — outside the chatbot's scripted options.",
      },
      {
        kind: "blank",
        emoji: "🚦",
        sentence: "Good conversational AI is measured partly by how reliably it recognises moments it shouldn't try to ___ alone.",
        options: ["handle", "delete", "ignore", "bill"],
        correctIndex: 0,
        explain: "Knowing when to hand off is as important as what the chatbot can resolve on its own.",
      },
    ],
  },
  {
    type: "quiz",
    lessonTitle: "Module 4 Check-In",
    questions: [
      {
        kind: "choice",
        emoji: "💰",
        prompt: "What does \"programmatic buying\" mean in digital advertising?",
        options: ["Humans manually negotiating every ad placement", "Ad space bought and sold automatically through software in real time", "Only buying ads once a year", "Advertising exclusively on one platform"],
        correctIndex: 1,
        explain: "Programmatic buying automates the purchase of ad space through real-time software auctions instead of manual, deal-by-deal negotiation.",
      },
      {
        kind: "blank",
        emoji: "🎯",
        sentence: "In automated bidding, marketers set goals and ___ — like target cost-per-acquisition and budget caps — rather than manually setting each bid.",
        options: ["guardrails", "random numbers", "competitor names", "font choices"],
        correctIndex: 0,
        explain: "Marketers define the boundaries and goals; the algorithm adjusts individual bids within them in real time.",
      },
      {
        kind: "choice",
        emoji: "🧪",
        prompt: "Why should you decide on a hypothesis before running automated ad variant testing?",
        options: ["It's required by law", "So the results teach you something reusable, not just produce a winner", "Because the platform requires exactly one variant", "It has no real effect on the outcome"],
        correctIndex: 1,
        explain: "Testing without a clear question in mind still produces a \"winning\" ad, but without insight you can apply to future campaigns.",
      },
      {
        kind: "choice",
        emoji: "📧",
        prompt: "What is \"send-time optimisation\" in AI-powered email marketing?",
        options: ["Sending every email at exactly 9am", "Predicting the best individual time to send each subscriber an email", "Deleting old email lists automatically", "Writing subject lines only once a year"],
        correctIndex: 1,
        explain: "Send-time optimisation predicts each individual recipient's likely best open time and staggers sends accordingly, rather than using one fixed time for everyone.",
      },
      {
        kind: "blank",
        emoji: "🚦",
        sentence: "Well-designed chatbots recognise emotionally charged or time-sensitive situations and ___ to a human quickly rather than trying to resolve everything automatically.",
        options: ["escalate", "disconnect", "ignore", "delay indefinitely"],
        correctIndex: 0,
        explain: "The best conversational AI setups are measured partly by how reliably they hand off situations they shouldn't try to handle alone.",
      },
      {
        kind: "choice",
        emoji: "⚖️",
        prompt: "In the \"Budget Reallocation Call\" scenario, what was the recommended response to a surprising automated bidding shift?",
        options: ["Blindly trust it with no follow-up", "Immediately override it based on instinct", "Check the actual conversion data, then decide with evidence", "Ignore the campaign entirely"],
        correctIndex: 2,
        explain: "The right habit is neither blind trust nor reflexive override — checking the real data behind a surprising shift leads to a better-informed decision either way.",
      },
    ],
  },
];

// ── Module 5 — Measuring & Optimising with AI ─────────────────────────────────
const module5: LessonContent[] = [
  {
    type: "read-reflect",
    lessonTitle: "AI-Powered Analytics and Attribution",
    cards: [
      {
        emoji: "❓",
        headline: "Attribution: the old question",
        body: "Attribution tries to answer \"which touchpoint gets credit for a sale?\" — a genuinely hard question even before privacy changes made it harder still. A customer might see a social ad, later click a search ad, and eventually convert from an email — and every one of those touchpoints has some legitimate claim to credit.",
      },
      {
        emoji: "🔗",
        headline: "Multi-touch attribution, briefly",
        body: "Older models tried to trace a user's exact path across ads and clicks — first touch, last touch, or a weighted split across every touchpoint — using tracking data stitched together across platforms. This approach worked reasonably well as long as that cross-platform tracking data was actually available and reliable.",
      },
      {
        emoji: "📐",
        headline: "Marketing mix modelling (MMM) as an alternative",
        body: "MMM instead looks at aggregate spend and results over time across channels — statistically estimating each channel's contribution without needing to track any individual person at all. It answers a slightly different, more durable question: not \"which specific person clicked what,\" but \"how much did this channel move the needle overall.\"",
      },
      {
        emoji: "🍪",
        headline: "Why MMM has grown in importance",
        body: "As individual-level tracking became harder — cookie deprecation, tightening privacy rules, walled-garden platforms that don't share data outward — MMM's channel-level approach became a more reliable, privacy-resilient way to estimate what's actually working, since it never depended on that individual tracking in the first place.",
      },
      {
        emoji: "🤖",
        headline: "AI's role in both",
        body: "Machine learning models now handle the heavy statistical lifting in modern MMM, and also flag anomalies or trends in attribution data faster than a human scanning spreadsheets could ever manage. This is one of the clearer examples of AI making an existing statistical discipline meaningfully more practical to run continuously.",
      },
    ],
    reflectPrompt: "If you couldn't track individual users at all, how would you try to figure out which marketing channel was actually working?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📐",
        prompt: "What does marketing mix modelling (MMM) primarily rely on?",
        options: ["Individual-level tracking of every user", "Aggregate spend and results across channels over time", "A single customer's browser history", "Guesswork"],
        correctIndex: 1,
        explain: "MMM estimates channel contribution from aggregate data, not individual tracking.",
      },
      {
        kind: "choice",
        emoji: "🍪",
        prompt: "Why has MMM grown in importance?",
        options: ["Individual-level tracking became less reliable due to privacy changes and cookie deprecation", "It's cheaper to run ads now", "Customers stopped buying online", "Multi-touch attribution became more accurate than ever"],
        correctIndex: 0,
        explain: "As cookie-based tracking became unreliable, MMM's aggregate approach became more valuable.",
      },
      {
        kind: "blank",
        emoji: "🤖",
        sentence: "AI now handles much of the heavy statistical work in modern ___ and flags trends faster than manual spreadsheet review.",
        options: ["MMM", "printing", "shipping", "hiring"],
        correctIndex: 0,
        explain: "Machine learning models handle the statistical lifting behind modern marketing mix modelling.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Reading an AI-Generated Marketing Dashboard",
    toolName: "Google Analytics",
    toolUrl: "https://analytics.google.com",
    steps: [
      {
        title: "Start with the flagged insights, not the raw numbers",
        body: "Most modern dashboards surface automatic insights — \"conversions up 24% vs. last week\" — before you even look at charts. Read these first to know where to focus your limited attention, rather than scanning every chart from the top hoping something jumps out.",
      },
      {
        title: "Check the comparison window",
        body: "An \"up 24%\" insight means little without knowing the comparison period — a normal Tuesday compared to last Tuesday is a completely different claim from comparing performance to a holiday week where traffic patterns are unusual for everyone.",
      },
      {
        title: "Look for the driver, not just the headline number",
        body: "Click into a flagged metric to see what's actually driving it — one channel, one campaign, one segment — rather than assuming the whole program improved uniformly just because the topline number moved.",
        tip: "A single spiking campaign can make an entire channel look better than it really is.",
      },
      {
        title: "Cross-check against a metric the tool didn't flag",
        body: "Before acting on an automated insight, glance at one adjacent metric it didn't highlight — like whether traffic quality (bounce rate, time on page) moved in the same direction, not just the headline number the dashboard chose to surface.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Turn Data into a Recommendation",
    intro: "Dashboards surface numbers; marketers turn numbers into decisions. You'll practice that translation, since a dashboard full of accurate numbers is worthless if nobody turns it into a clear next action.",
    steps: [
      {
        open: true,
        prompt: "Hypothetical dashboard: your email channel's conversion rate dropped from 3.2% to 2.1% over the last 2 weeks, while open rate stayed flat. What does this pattern suggest is — and isn't — the likely cause?",
        placeholder: "e.g. Since opens stayed flat but conversions dropped...",
        modelAnswer: "Since open rate stayed flat, the issue probably isn't the subject line or send time — people are still opening at the same rate as before. The drop is more likely inside the email itself (an offer, a broken link, an unclear call-to-action) or on the landing page it sends traffic to, since that's where the funnel changed.",
      },
      {
        open: false,
        prompt: "Write the one-sentence recommendation you'd bring to your team based on that reasoning — specific enough that someone could act on it today.",
        placeholder: "e.g. I recommend we check...",
        modelAnswer: "I recommend we audit the email's call-to-action and landing page for the last two weeks' campaigns before touching subject lines or send times, since the drop-off appears to start after the open, not before it.",
      },
      {
        open: false,
        prompt: "What's one piece of additional data you'd want before being fully confident in that recommendation, and why would it help narrow things down?",
        placeholder: "e.g. I'd want to see...",
        modelAnswer: "I'd want to see click-through rate specifically, not just conversion, which would confirm whether the drop happens between open-and-click or between click-and-convert — narrowing the problem down further before proposing a fix that might target the wrong stage of the funnel.",
      },
    ],
    artifactTitle: "Your data-to-recommendation writeup",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📧",
        prompt: "In the example, since open rate stayed flat but conversions dropped, where does the likely problem lie?",
        options: ["In the subject line", "Somewhere after the open — inside the email or on the landing page", "In the sender's name", "In the time zone settings"],
        correctIndex: 1,
        explain: "A flat open rate points away from subject line issues and toward what happens after the open.",
      },
      {
        kind: "choice",
        emoji: "🔎",
        prompt: "What additional data point was suggested to narrow down the cause further?",
        options: ["Click-through rate specifically", "The company's stock price", "The weather that week", "The CEO's calendar"],
        correctIndex: 0,
        explain: "Click-through rate would clarify whether the drop happens between open-and-click or click-and-convert.",
      },
      {
        kind: "blank",
        emoji: "📝",
        sentence: "A good data-driven recommendation states the pattern observed and the specific ___ to check next.",
        options: ["action", "holiday", "font", "currency"],
        correctIndex: 0,
        explain: "A useful recommendation names a concrete next step, not just an observation.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "Anomaly Detection, Explained",
    cards: [
      {
        emoji: "📉",
        headline: "What an anomaly detection model actually does",
        body: "An anomaly detection model learns what \"normal\" looks like for a metric over time, then flags moments that deviate meaningfully from that pattern — a spike, a drop, or an unusual shape it hasn't seen recently. It's essentially building a statistical baseline and then watching for anything that breaks it.",
      },
      {
        emoji: "👀",
        headline: "Why this beats a human staring at charts",
        body: "Models can watch hundreds of metrics simultaneously, 24/7, and catch a subtle deviation in one obscure metric that a person would never think to check manually. That breadth of coverage is the real advantage — not that the model is smarter than a human, but that it never gets tired of checking.",
      },
      {
        emoji: "🚫",
        headline: "False positives are part of the deal",
        body: "Not every flagged anomaly is meaningful — a metric can look unusual because of a one-off event, like a holiday or a site outage, rather than anything strategically important. Learning to tell the difference between a real signal and statistical noise is a skill in itself.",
      },
      {
        emoji: "🧩",
        headline: "Context turns a flag into an insight",
        body: "An anomaly alert tells you where to look, not what it means — someone still has to check what else happened at that time to interpret it correctly. The alert is the starting point of an investigation, never the conclusion of one.",
      },
    ],
    reflectPrompt: "If a metric you cared about suddenly spiked with no obvious explanation, what's the first thing you'd check before reacting to it?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📉",
        prompt: "What does an anomaly detection model actually do?",
        options: ["Learns what 'normal' looks like, then flags meaningful deviations", "Deletes unusual data automatically", "Replaces the need for any human review", "Guarantees every flag is meaningful"],
        correctIndex: 0,
        explain: "Anomaly detection flags deviations from a learned baseline — it doesn't interpret them.",
      },
      {
        kind: "choice",
        emoji: "🚫",
        prompt: "Why are false positives part of the deal with anomaly detection?",
        options: ["A metric can look unusual due to a one-off event, not something strategically important", "Anomaly detection never produces false positives", "All anomalies are always meaningful", "Anomalies only ever happen on weekends"],
        correctIndex: 0,
        explain: "A one-off event like a holiday can trigger a flag without being strategically significant.",
      },
      {
        kind: "blank",
        emoji: "🧩",
        sentence: "An anomaly alert tells you where to look — someone still has to check the ___ to interpret it correctly.",
        options: ["context", "font", "logo", "invoice"],
        correctIndex: 0,
        explain: "The alert points to something, but understanding what happened takes human context.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "Reading the Dashboard",
    beats: [
      {
        kind: "narrative",
        emoji: "📈",
        body: "Your analytics dashboard flags an anomaly: your website's organic traffic jumped 40% overnight, with no campaign change on your end to explain it.",
      },
      {
        kind: "decision",
        prompt: "Your manager asks what happened and whether it's a trend worth building on. What's your first move — report the exciting number, or dig in first?",
        choices: [
          {
            label: "Report the number immediately as a win to celebrate",
            outcome: "You report the number immediately as a win to celebrate. Two days later the traffic drops right back down — it turns out a single article got picked up by an aggregator for 48 hours. The \"win\" had already evaporated by the time it was celebrated.",
          },
          {
            label: "Dig into which pages and sources drove the spike before reporting anything",
            outcome: "You dig into which pages and sources drove the spike before reporting anything. You find one blog post got picked up by a news aggregator temporarily. You report it accurately as a short-lived referral spike, not a durable organic-search trend — setting the right expectations from the start.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🔍",
        body: "Digging in paid off — anomaly detection told you where to look, but understanding what actually happened took a human check of the underlying pages and sources.",
      },
      {
        kind: "decision",
        prompt: "Now that you know the real cause, how do you frame it in your report to leadership?",
        choices: [
          {
            label: "Frame it exactly as it is: a short-lived referral spike, not organic growth",
            outcome: "You frame it exactly as it is: a short-lived referral spike, not organic growth. Your manager appreciates the precision — expectations for next month stay realistic, and nobody is later confused about why the \"40% growth\" didn't stick.",
          },
          {
            label: "Frame it generally as \"strong traffic growth\" without the nuance",
            outcome: "You frame it generally as \"strong traffic growth\" without the nuance. Next month's flat numbers look like a decline by comparison, and you spend time re-explaining what actually happened after the fact instead of just being precise the first time.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "✅",
        body: "An anomaly flag is a starting point, not a conclusion. The dashboard tells you something moved — turning that into an accurate story still takes someone checking the details before it goes anywhere near a report.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📈",
        prompt: "What was the actual cause of the 40% overnight organic traffic jump?",
        options: ["A durable, permanent increase in organic search ranking", "A single blog post picked up temporarily by a news aggregator", "A new ad campaign", "Nothing — the number was fake"],
        correctIndex: 1,
        explain: "The spike was a short-lived referral event, not a durable organic-search trend.",
      },
      {
        kind: "choice",
        emoji: "🔍",
        prompt: "What was the better response before reporting the traffic spike to a manager?",
        options: ["Report the exciting number immediately as a win", "Dig into which pages and sources drove it first", "Delete the anomaly alert", "Ignore it completely"],
        correctIndex: 1,
        explain: "Digging in first revealed the real, short-lived cause before it was reported as a durable trend.",
      },
      {
        kind: "blank",
        emoji: "🧭",
        sentence: "An anomaly flag is a starting point, not a ___ — someone still has to verify the real cause.",
        options: ["conclusion", "invoice", "guarantee", "refund"],
        correctIndex: 0,
        explain: "A flag tells you where to look; the real story still needs human verification.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Write a One-Paragraph Performance Summary",
    intro: "Being able to summarise a campaign's performance clearly, in one paragraph, is a core AI-era marketing skill — you'll practice compressing a set of numbers into a clear narrative someone could act on without reading a full report.",
    steps: [
      {
        open: true,
        prompt: "Hypothetical results for a 2-week social campaign: 1.2M impressions, 3.5% click-through rate (above your usual 2.1% benchmark), but on-site conversion rate was only 0.8% (below your usual 1.4% benchmark). Write one sentence stating what went well.",
        placeholder: "e.g. The campaign significantly outperformed...",
        modelAnswer: "The campaign significantly outperformed our benchmark on click-through rate (3.5% vs. a typical 2.1%), showing the creative and targeting resonated strongly with the audience.",
      },
      {
        open: false,
        prompt: "Now write one sentence stating what underperformed and hint at a likely cause, without yet proposing a fix.",
        placeholder: "e.g. On-site conversion fell short...",
        modelAnswer: "On-site conversion rate came in below benchmark (0.8% vs. 1.4%), suggesting the landing page experience didn't match the strength of the ad creative that drove people there.",
      },
      {
        open: false,
        prompt: "Combine both into a single, balanced one-paragraph summary you'd actually send to your manager, ending with a clear next step.",
        placeholder: "e.g. This campaign drove strong engagement but...",
        modelAnswer: "This campaign drove strong engagement, with click-through rate well above benchmark (3.5% vs. 2.1%), showing the creative and targeting worked. However, on-site conversion came in below benchmark (0.8% vs. 1.4%), pointing to a likely gap between the ad's promise and the landing page experience. Recommend auditing the landing page before the next flight of this campaign.",
      },
    ],
    artifactTitle: "Your one-paragraph performance summary",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📊",
        prompt: "In the hypothetical results, what metric outperformed benchmark?",
        options: ["Click-through rate", "On-site conversion rate", "Email open rate", "Server uptime"],
        correctIndex: 0,
        explain: "Click-through rate came in well above the usual benchmark in the example.",
      },
      {
        kind: "choice",
        emoji: "🔗",
        prompt: "What did the below-benchmark on-site conversion rate likely suggest?",
        options: ["The ad creative and targeting failed", "A gap between the ad's promise and the landing page experience", "The campaign had zero impressions", "Nothing was wrong at all"],
        correctIndex: 1,
        explain: "Strong click-through but weak conversion points to a mismatch after the click, on the landing page.",
      },
      {
        kind: "blank",
        emoji: "📝",
        sentence: "A good performance summary states what went well, what underperformed, and a likely ___ or next step.",
        options: ["cause", "excuse", "refund", "apology"],
        correctIndex: 0,
        explain: "A useful summary points toward a cause or next action, not just raw numbers.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "Why Cookie Deprecation Changed Attribution",
    cards: [
      {
        emoji: "🧵",
        headline: "The old assumption: a trackable individual journey",
        body: "Multi-touch attribution assumed you could follow one person's exact path across sites and ads using third-party cookies — see the ad, click, browse, buy, all connected to one identity across every step. That assumption held up reasonably well for years, right up until it didn't.",
      },
      {
        emoji: "🔒",
        headline: "What broke that assumption",
        body: "Browser-level cookie blocking and privacy regulation made that individual-level, cross-site tracking increasingly unreliable and, in many cases, unavailable outright. Teams built entirely around multi-touch attribution suddenly had a measurement foundation that was crumbling under them.",
      },
      {
        emoji: "📐",
        headline: "Marketing mix modelling doesn't need that assumption",
        body: "MMM works with aggregate data — total spend per channel, total results per week — so it keeps working even when individual-level tracking doesn't exist at all. It never needed the assumption that broke, which is exactly why it held up.",
      },
      {
        emoji: "⚖️",
        headline: "The tradeoff: less precision, more resilience",
        body: "MMM generally can't tell you which exact ad a specific person clicked before buying — but it gives a directionally reliable read on channel performance that survives privacy changes multi-touch attribution simply can't. That's a real tradeoff, not a strict upgrade.",
      },
      {
        emoji: "🤝",
        headline: "Most teams now use both, differently",
        body: "Platform-level click data still has real tactical value for day-to-day optimisation, while marketing mix modelling increasingly anchors the bigger strategic budget conversations across channels where individual-level precision was never really the point anyway.",
      },
    ],
    reflectPrompt: "Does it surprise you that less individual-level data can sometimes lead to a more reliable big-picture read? Why or why not?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🧵",
        prompt: "What did multi-touch attribution assume that broke down?",
        options: ["That you could follow one person's exact path across sites and ads via cookies", "That all ads cost the same", "That customers never click ads", "That email marketing doesn't exist"],
        correctIndex: 0,
        explain: "Multi-touch attribution relied on cross-site cookie tracking, which privacy changes broke.",
      },
      {
        kind: "choice",
        emoji: "📐",
        prompt: "Why does marketing mix modelling survive privacy changes that broke multi-touch attribution?",
        options: ["It works with aggregate data, not individual tracking", "It requires more personal data than ever", "It was banned by regulators", "It only works with cookies"],
        correctIndex: 0,
        explain: "MMM uses channel-level aggregate data, so it doesn't depend on individual tracking at all.",
      },
      {
        kind: "blank",
        emoji: "⚖️",
        sentence: "MMM offers less individual precision but more ___ that survives privacy changes.",
        options: ["resilience", "cost", "secrecy", "risk"],
        correctIndex: 0,
        explain: "The tradeoff is less granular precision for a more privacy-resilient measurement approach.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Setting Up an Automated Reporting Digest",
    toolName: "Google Looker Studio",
    toolUrl: "https://lookerstudio.google.com",
    steps: [
      {
        title: "Pick the 5 metrics that actually drive decisions",
        body: "A digest with 30 metrics gets skimmed and ignored within a week. Choose the handful that would actually change what your team does next week, and leave the rest for someone to dig into only if they need it.",
      },
      {
        title: "Set the comparison baseline explicitly",
        body: "Decide upfront whether the digest compares to last week, last month, or the same period last year — and label it clearly so nobody misreads a normal seasonal dip as a real decline in performance.",
      },
      {
        title: "Automate the flag, not the interpretation",
        body: "Let the tool auto-highlight metrics that moved significantly, but leave the \"why\" and \"what to do about it\" as a short human-written note rather than an auto-generated summary that might sound more confident than the underlying analysis actually supports.",
        tip: "Auto-generated one-line summaries can sound confident even when the underlying cause is genuinely unclear — don't let confident phrasing substitute for actual analysis.",
      },
      {
        title: "Schedule it and actually review the first few",
        body: "Set the digest to auto-send weekly, but manually sanity-check the first month of sends against the raw data before fully trusting it unsupervised — automation earns trust over time, it doesn't start with it.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "The Metric That Looked Too Good",
    beats: [
      {
        kind: "narrative",
        emoji: "🎉",
        body: "Your automated weekly digest shows a huge win: checkout conversion rate jumped from 2.8% to 6.5% overnight after a site update went live.",
      },
      {
        kind: "decision",
        prompt: "This is the kind of number that gets forwarded straight to leadership without a second thought. Do you send it immediately, or check it first?",
        choices: [
          {
            label: "Forward it immediately — it's clearly great news",
            outcome: "You forward it immediately since it's clearly great news. Leadership celebrates in a company update. The next day, engineering finds a tracking bug: the update accidentally started double-counting some conversion events. The correction is awkward and very visible to everyone who saw the original announcement.",
          },
          {
            label: "Check the underlying event data before sending anything up",
            outcome: "You check the underlying event data before sending anything up. You catch a tracking bug from the site update that's double-counting some conversion events. You report the real number — a modest, genuine 3.1% — and avoid an embarrassing correction later.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🐛",
        body: "A metric that jumps far outside its normal range is exactly the kind of anomaly worth being suspicious of, not just excited about — genuinely surprising results and broken tracking can look completely identical on a dashboard.",
      },
      {
        kind: "decision",
        prompt: "Going forward, what's the better default habit for very large, unexpected metric jumps — whether they look good or bad?",
        choices: [
          {
            label: "Treat any unusually large jump as a signal to verify the tracking before acting on the number",
            outcome: "You treat any unusually large jump as a signal to verify the tracking before acting on the number. The next quarter, this habit catches another tracking issue — this time undercounting — within a day, before it affects a real budget decision.",
          },
          {
            label: "Only double-check numbers that look bad, since good numbers don't need defending",
            outcome: "You only double-check numbers that look bad, since good numbers don't seem to need defending. The team optimises confidently around a number that turns out to be inflated by a bug, before finally catching it a month later — after real decisions were already made on the wrong data.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "✅",
        body: "Automated dashboards make it easy to see big changes fast — but a sudden, dramatic swing in either direction deserves the same instinct: verify before you celebrate or panic, since the two situations often look exactly the same at first glance.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🎉",
        prompt: "What was the real cause of the dramatic conversion-rate jump?",
        options: ["A genuinely successful site update", "A tracking bug double-counting some conversion events", "A new product launch", "A currency conversion error"],
        correctIndex: 1,
        explain: "The 'huge win' was actually a tracking bug, not a real performance improvement.",
      },
      {
        kind: "choice",
        emoji: "🐛",
        prompt: "What's the recommended habit for very large, unexpected metric jumps, good or bad?",
        options: ["Only double-check numbers that look bad", "Treat any unusually large jump as a signal to verify tracking before acting on it", "Always forward exciting numbers immediately", "Ignore anything that looks too good"],
        correctIndex: 1,
        explain: "Large jumps in either direction deserve verification before anyone acts on them.",
      },
      {
        kind: "blank",
        emoji: "✅",
        sentence: "A sudden, dramatic swing in either direction deserves the same instinct: ___ before you celebrate or panic.",
        options: ["verify", "publish", "ignore", "delete"],
        correctIndex: 0,
        explain: "Verification comes before celebration or panic, regardless of which direction the metric moved.",
      },
    ],
  },
  {
    type: "quiz",
    lessonTitle: "Module 5 Check-In",
    questions: [
      {
        kind: "choice",
        emoji: "📊",
        prompt: "What is marketing mix modelling (MMM) primarily based on?",
        options: ["Individual user tracking across every website", "Aggregate spend and results across channels over time", "A single customer's browser history", "Random sampling of competitor ads"],
        correctIndex: 1,
        explain: "MMM estimates each channel's contribution using aggregate, channel-level data over time, rather than tracking any individual person.",
      },
      {
        kind: "blank",
        emoji: "🍪",
        sentence: "As individual-level tracking became less reliable due to cookie deprecation and privacy rules, marketing mix modelling grew in importance because it doesn't require tracking a single ___.",
        options: ["person", "dollar", "channel", "website"],
        correctIndex: 0,
        explain: "MMM works with aggregate channel-level data, so it keeps functioning even without individual-level tracking.",
      },
      {
        kind: "choice",
        emoji: "🔍",
        prompt: "What does an anomaly detection alert actually tell you?",
        options: ["The exact business reason a metric changed", "That something moved outside its normal pattern, worth investigating", "That the metric is definitely wrong", "Nothing useful without a data science degree"],
        correctIndex: 1,
        explain: "Anomaly detection flags where to look — someone still has to investigate the underlying cause and context to interpret it correctly.",
      },
      {
        kind: "choice",
        emoji: "🎉",
        prompt: "In \"The Metric That Looked Too Good,\" what should have happened before forwarding the dramatic conversion-rate jump to leadership?",
        options: ["Nothing — good news should be shared immediately", "Verifying the underlying event data and tracking first", "Waiting exactly one calendar year to confirm it", "Deleting the metric entirely"],
        correctIndex: 1,
        explain: "A sudden, dramatic swing in either direction deserves verification before it's acted on or shared widely — the jump turned out to be a tracking bug, not a real result.",
      },
      {
        kind: "blank",
        emoji: "📧",
        sentence: "In the email conversion drop example, since open rate stayed flat but conversions dropped, the likely cause was somewhere ___ the open, not in the subject line or send time.",
        options: ["after", "before", "unrelated to", "outside"],
        correctIndex: 0,
        explain: "A flat open rate with dropping conversions points to a problem after the open — inside the email or on the landing page — not in what drives opens.",
      },
      {
        kind: "choice",
        emoji: "📝",
        prompt: "What's a good habit when setting up an automated reporting digest?",
        options: ["Automate the interpretation entirely so no human review is needed", "Include as many metrics as possible so nothing is missed", "Automate the flagging of significant changes, but keep the interpretation human-written", "Never compare to any baseline period"],
        correctIndex: 2,
        explain: "Letting a tool flag what moved while keeping the \"why\" and \"what to do\" as a human-written note avoids mistaking confident auto-generated phrasing for real analysis.",
      },
    ],
  },
];

// ── Module 6 — Your AI Marketing Strategy ─────────────────────────────────────
const module6: LessonContent[] = [
  {
    type: "read-reflect",
    lessonTitle: "Building Your Personal AI Toolkit",
    cards: [
      {
        emoji: "🧰",
        headline: "You don't need every tool",
        body: "Across this track you've seen writing assistants, image generators, personalisation engines, bidding platforms, and analytics dashboards — a genuinely wide range of tools covering very different parts of the job. Most marketers only need a small, well-chosen set of them, not all of them running at once.",
      },
      {
        emoji: "💬",
        headline: "One strong generalist assistant",
        body: "A capable LLM chat assistant covers drafting, brainstorming, summarising, and editing — the daily-use core of the toolkit that touches almost every task in this track in some form. If you only keep one tool, this is the one worth keeping.",
      },
      {
        emoji: "🎯",
        headline: "One tool for whatever your role needs most",
        body: "Beyond the generalist, add depth in your actual specialty — an image generator if you're content-heavy, a segmentation tool if you're data-heavy, a dashboard tool if you're reporting-heavy. The right second and third tool depends entirely on which part of the job you actually spend the most time on.",
      },
      {
        emoji: "📘",
        headline: "A living voice guide and prompt library",
        body: "The brand voice guide and saved prompt templates from Module 2 are worth more the longer you maintain them — treat this as an asset that compounds, not a one-time setup you write once and forget. Six months of small corrections turns a decent voice guide into a genuinely excellent one.",
      },
      {
        emoji: "🧭",
        headline: "A habit, not just a stack",
        body: "The most valuable part of an \"AI toolkit\" isn't the list of apps — it's the habits: checking facts, giving specific feedback, and knowing when a task genuinely needs a human. Those habits transfer to whatever tool replaces today's favourite in a year or two; the specific apps don't.",
      },
    ],
    reflectPrompt: "Based on everything in this track, what would your personal \"core three\" AI tools be?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🧰",
        prompt: "What does the lesson recommend as the foundation of a personal AI toolkit?",
        options: ["As many tools as possible", "One strong generalist assistant plus depth in your specific role's needs", "Only free tools regardless of fit", "A brand-new tool every week"],
        correctIndex: 1,
        explain: "A small, well-chosen set beats trying to use every available tool.",
      },
      {
        kind: "choice",
        emoji: "🧭",
        prompt: "What's described as the most valuable part of an 'AI toolkit'?",
        options: ["The exact list of apps used", "The habits — checking facts, giving specific feedback, knowing when a task needs a human", "The subscription cost", "The logo design"],
        correctIndex: 1,
        explain: "The habits around using AI matter more than which specific apps are in the stack.",
      },
      {
        kind: "blank",
        emoji: "📘",
        sentence: "A brand voice guide and prompt library are worth more the longer you ___ them.",
        options: ["maintain", "ignore", "delete", "hide"],
        correctIndex: 0,
        explain: "These assets compound in value the longer they're actively maintained.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "Ethics, Disclosure, and Trust",
    beats: [
      {
        kind: "narrative",
        emoji: "🎥",
        body: "Your team is producing a video ad using an AI voice generator to recreate a well-known internal spokesperson's voice for scale — instead of asking them to personally record ten more variations of the same script.",
      },
      {
        kind: "decision",
        prompt: "Do you need to disclose that the voice is AI-generated, even though it's modelled on a real person who gave their consent?",
        choices: [
          {
            label: "No — it's the same person's actual voice pattern, just generated, so no disclosure is needed",
            outcome: "You decide no disclosure is needed, since it's the same person's actual voice pattern, just generated. A viewer notices something slightly off about the audio and asks about it publicly. Not disclosing upfront makes the eventual explanation feel evasive rather than transparent, even though nothing dishonest actually happened.",
          },
          {
            label: "Yes — disclose that AI was used to generate the voice, even though it's modelled on a real person who consented",
            outcome: "You disclose that AI was used to generate the voice, even though it's modelled on a real person who consented. The disclosure barely registers with most viewers, but it fully protects the brand's credibility if anyone ever does ask — and it was the honest thing to do regardless of whether anyone noticed.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🎭",
        body: "This connects directly to deepfake risk: the same technology that can, with consent, scale a spokesperson's voice can, without consent, convincingly fabricate someone saying things they never said. Disclosure norms exist because the underlying technology doesn't distinguish between the two uses at all.",
      },
      {
        kind: "decision",
        prompt: "Your team is deciding on a general disclosure policy for all AI-generated media going forward. Should the bar for disclosure be \"only if it might mislead someone,\" or \"always, regardless of how obvious it seems\"?",
        choices: [
          {
            label: "Always disclose, regardless of how obvious it seems",
            outcome: "You set the policy to always disclose, regardless of how obvious it seems. It costs a small line of text or audio on every asset, but the brand never has to make a judgment call about whether a specific case \"counts\" — and never gets caught being wrong about that judgment.",
          },
          {
            label: "Only disclose when it might genuinely mislead someone",
            outcome: "You set the policy to only disclose when it might genuinely mislead someone. Most of the time this works fine, but one edge case — a stylised but realistic product image mistaken for a real photo — becomes a disclosure dispute the \"always disclose\" policy would have avoided entirely.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "🤝",
        body: "Consistent disclosure isn't just a compliance box to check — it's what lets an audience trust everything else you publish, including the content that has nothing to do with AI at all. Trust, once it's been questioned even once, is expensive to rebuild.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🎙️",
        prompt: "In the scenario, why disclose that a spokesperson's voice was AI-generated, even with consent?",
        options: ["It protects brand credibility if anyone ever asks, regardless of consent", "Disclosure is never necessary if consent exists", "It makes the ad less effective on purpose", "AI voices don't need disclosure ever"],
        correctIndex: 0,
        explain: "Disclosure protects credibility and is the honest thing to do, even when consent already exists.",
      },
      {
        kind: "choice",
        emoji: "🎭",
        prompt: "What connects consented AI voice-scaling to deepfake risk?",
        options: ["Nothing, they're unrelated", "The same technology can, without consent, fabricate someone saying things they never said", "Deepfakes only use video, never audio", "Consent makes deepfakes impossible"],
        correctIndex: 1,
        explain: "The underlying technology doesn't distinguish between a consented use and a fabricated one.",
      },
      {
        kind: "blank",
        emoji: "📏",
        sentence: "The team decided the bar for disclosure should be 'always,' rather than a ___ made fresh each time.",
        options: ["judgment call", "refund", "price increase", "delay"],
        correctIndex: 0,
        explain: "A consistent 'always disclose' policy avoids relying on a fresh judgment call in every case.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "What AI Still Can't Do in Marketing",
    cards: [
      {
        emoji: "🎯",
        headline: "It can't decide what your brand should stand for",
        body: "AI can execute a brand voice once it's defined, and even help draft parts of a positioning statement — but choosing what a brand genuinely stands for is still a human judgment call about values and audience that no amount of generation can make for you.",
      },
      {
        emoji: "🤝",
        headline: "It can't build a real relationship",
        body: "Trust with a customer, a journalist, or a partner is built through consistent human judgment over time — AI can support that relationship by handling the logistics around it, but it can't actually be the relationship itself.",
      },
      {
        emoji: "🧑‍⚖️",
        headline: "It can't take responsibility for a mistake",
        body: "When an AI-assisted campaign goes wrong, someone still has to own the decision, apologise where needed, and fix it — accountability doesn't transfer to a tool no matter how much of the actual drafting or targeting it did.",
      },
      {
        emoji: "🎨",
        headline: "It can't reliably tell you what \"good\" looks like",
        body: "Taste — knowing which of ten AI-generated options is actually the right one for this brand, this moment, this audience — remains a human skill AI can support but not replace. The options are cheap to generate; the judgment about which one is right still isn't.",
      },
      {
        emoji: "🏁",
        headline: "This is the actual message of this track",
        body: "AI changes how fast marketing work gets done and how much of it any one person can handle — it does not change who's responsible for whether that work is any good. That distinction is really the entire message of this track, condensed into one sentence.",
      },
    ],
    reflectPrompt: "Of everything covered in this track, what's one thing you're now confident AI should never fully take over in your work?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🧑‍⚖️",
        prompt: "According to this lesson, what is something AI still cannot do in marketing?",
        options: ["Draft a first-pass email", "Take real responsibility for a mistake", "Generate multiple ad variants", "Summarise a report"],
        correctIndex: 1,
        explain: "Accountability doesn't transfer to a tool — a human still owns decisions and their consequences.",
      },
      {
        kind: "choice",
        emoji: "🎨",
        prompt: "What is described as a human skill AI can support but not replace?",
        options: ["Taste — knowing which option is actually right for this brand and moment", "Typing speed", "Spellchecking", "File storage"],
        correctIndex: 0,
        explain: "Taste and judgment about what's right for a specific brand and moment remain human skills.",
      },
      {
        kind: "blank",
        emoji: "🏁",
        sentence: "AI changes how fast marketing work gets done, but it doesn't change who's ___ for whether that work is any good.",
        options: ["responsible", "paid", "located", "named"],
        correctIndex: 0,
        explain: "Speed changes, but accountability for quality stays with the human doing the work.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Write Your AI Marketing Playbook, Part 1",
    intro: "You're building a short personal playbook — a living document capturing how you'll actually use AI in your marketing work. Part 1 covers your tools and habits, the foundational layer everything else in your playbook builds on.",
    steps: [
      {
        open: true,
        prompt: "List your \"core three\" AI tools from this track (or ones you already use), and one sentence on what each one is for — specific enough that you could hand this list to a new colleague.",
        placeholder: "e.g. 1. [Tool] for...",
        modelAnswer: "1. An LLM chat assistant for drafting, brainstorming, and editing copy. 2. An image generator for quick concept visuals and social graphics. 3. Our analytics dashboard for weekly performance summaries and anomaly checks.",
      },
      {
        open: false,
        prompt: "Write your personal fact-checking rule — the exact habit you'll follow before publishing any AI-drafted content that includes a specific claim or number, specific enough to actually follow under deadline pressure.",
        placeholder: "e.g. Before publishing, I will always...",
        modelAnswer: "Before publishing any AI-drafted content with a specific number, statistic, or named source, I will find and confirm the original source myself — if I can't verify it within 10 minutes, it doesn't go in the final draft.",
      },
      {
        open: false,
        prompt: "Write one sentence describing how you'll keep your brand voice guide up to date going forward, so it doesn't quietly go stale the way most internal documents do.",
        placeholder: "e.g. Whenever an AI draft misses the mark in the same way twice, I will...",
        modelAnswer: "Whenever an AI draft misses the brand voice in the same way more than once, I'll add a specific rule or example to my voice guide within the same week, so the fix compounds instead of repeating.",
      },
    ],
    artifactTitle: "Your AI marketing playbook — Part 1: Tools & Habits",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🔎",
        prompt: "What's recommended as part of a personal fact-checking rule?",
        options: ["Never check anything, trust all AI output", "Verify any specific number or named source before it goes in a final draft", "Only check claims about competitors", "Fact-check once a year"],
        correctIndex: 1,
        explain: "Specific claims should be verified before they're ever included in a final published draft.",
      },
      {
        kind: "choice",
        emoji: "📘",
        prompt: "What should happen when an AI draft misses brand voice in the same way more than once?",
        options: ["Nothing, ignore it", "Add a specific rule or example to the voice guide", "Switch companies", "Stop using AI entirely"],
        correctIndex: 1,
        explain: "Recording the correction in the voice guide makes every future draft start better.",
      },
      {
        kind: "blank",
        emoji: "🧰",
        sentence: "A personal AI toolkit should include a fact-checking habit and a way to keep a brand voice guide ___.",
        options: ["updated", "secret", "expensive", "short"],
        correctIndex: 0,
        explain: "The voice guide is only useful if it's kept current as you learn what works and what doesn't.",
      },
    ],
  },
  {
    type: "tool-walkthrough",
    lessonTitle: "Auditing Your Team's AI Tool Stack",
    toolName: "Airtable",
    toolUrl: "https://airtable.com",
    steps: [
      {
        title: "List every AI tool currently in use, honestly",
        body: "Include the official ones and the ones people quietly use on their own — a real audit only works if it reflects what's actually happening across the team, not just what's been formally approved by someone in leadership.",
      },
      {
        title: "Note what each tool touches: data, content, or decisions",
        body: "Categorise each tool by what it handles — customer data, published content, or automated decisions like bidding — since each category carries meaningfully different levels of risk if something goes wrong with it.",
      },
      {
        title: "Flag anything without a clear owner",
        body: "If nobody could say who's responsible for checking a given tool's output before it goes live, that's a gap worth closing, regardless of how well the tool has performed so far.",
        tip: "\"It's been fine so far\" is not the same as \"someone is checking it.\"",
      },
      {
        title: "Revisit the list quarterly",
        body: "New tools get adopted quickly and quietly, often by individual team members trying to solve their own problem — a standing quarterly review keeps the list, and the risk picture, honest instead of going stale within a few months.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "The Disclosure Decision",
    beats: [
      {
        kind: "narrative",
        emoji: "🖼️",
        body: "Marketing wants to use an AI-generated \"lifestyle\" image — a photorealistic scene of a family using your product — for a social ad, since scheduling an actual photoshoot in time wasn't possible before the campaign deadline.",
      },
      {
        kind: "decision",
        prompt: "The image is clearly stylised enough that most viewers would probably guess it's not a real photo. Do you still add an AI-disclosure label, or is that overkill for something this obvious?",
        choices: [
          {
            label: "Skip the label — it's obviously not a real photo",
            outcome: "You skip the label since it's obviously not a real photo. Most viewers do assume it's illustrated, but one commenter asks directly if it's a real family, and the lack of a clear answer reads as slightly evasive rather than simply an oversight.",
          },
          {
            label: "Add a small, clear disclosure label anyway",
            outcome: "You add a small, clear disclosure label anyway. The label goes almost unnoticed by most viewers, but when someone does ask, there's already a clear, honest answer sitting right there — no ambiguity for anyone to question.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "📏",
        body: "This is the same principle from earlier in the module, applied to a less obvious case: the bar for disclosure holding at \"always,\" rather than a judgment call made fresh every time, is what makes the policy actually reliable in practice.",
      },
      {
        kind: "decision",
        prompt: "A teammate argues that disclosure labels on obviously-illustrated content make the brand look overly cautious. How do you respond to that pushback?",
        choices: [
          {
            label: "Keep the consistent policy — clarity is worth a slightly more cautious look",
            outcome: "You keep the consistent policy, reasoning clarity is worth a slightly more cautious look. Over the next few campaigns, the label becomes just part of the brand's visual language — and the one time an image is genuinely ambiguous, nobody has to guess whether it should have been labelled.",
          },
          {
            label: "Make disclosure optional based on how obvious each image seems",
            outcome: "You make disclosure optional based on how obvious each image seems. Six months later, an image everyone assumed was \"obviously fine\" turns out to have fooled a meaningful number of viewers — and there's no consistent policy left to point to in the response.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "✅",
        body: "A disclosure policy only does its job if it's consistent enough that nobody has to make a judgment call under pressure about whether a specific piece of content \"really\" needs it. Consistency is the whole point.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🖼️",
        prompt: "Why add a disclosure label even to an image most viewers would guess is illustrated?",
        options: ["Because a consistent policy avoids relying on judgment calls under pressure", "Because it's legally required in every country", "Because it makes the image load faster", "It's not necessary at all"],
        correctIndex: 0,
        explain: "A consistent policy means nobody has to decide in the moment whether a case 'counts.'",
      },
      {
        kind: "choice",
        emoji: "🏷️",
        prompt: "What happened when the team kept the consistent disclosure policy?",
        options: ["The label became part of the brand's visual language, and ambiguous cases were always covered", "Viewers stopped trusting the brand", "The image had to be deleted", "Nothing changed"],
        correctIndex: 0,
        explain: "Consistency meant even ambiguous future cases were already covered by the policy.",
      },
      {
        kind: "blank",
        emoji: "📏",
        sentence: "A disclosure policy only works if it's consistent enough that nobody has to make a ___ under pressure.",
        options: ["judgment call", "refund", "phone call", "invoice"],
        correctIndex: 0,
        explain: "Consistency removes the need for a fresh judgment call in the moment.",
      },
    ],
  },
  {
    type: "interactive-exercise",
    lessonTitle: "Write Your AI Marketing Playbook, Part 2",
    intro: "Part 2 of your playbook: your personal boundaries — what you'll always keep human, and how you'll keep learning as these tools change. This half is less about tools and more about the judgment calls you're committing to in advance.",
    steps: [
      {
        open: true,
        prompt: "Write one sentence naming a type of marketing decision you'll never fully hand to AI, and why — something specific enough that you'd actually notice if you were about to break your own rule.",
        placeholder: "e.g. I will always personally decide...",
        modelAnswer: "I will always personally decide what our brand stands for and how it should respond in a values-related moment, because that judgment reflects things AI has no real basis to weigh — our history, our specific audience, and what we're actually willing to stand behind.",
      },
      {
        open: false,
        prompt: "Write your personal disclosure rule — when you will label something as AI-generated or AI-assisted, specific enough to apply consistently rather than case by case.",
        placeholder: "e.g. I will disclose AI involvement whenever...",
        modelAnswer: "I will disclose AI involvement in any published image, video, or voice content, regardless of how obvious it seems, and I will note AI-assisted drafting in any published data claim or statistic until it's been independently verified.",
      },
      {
        open: false,
        prompt: "Write one sentence on how you'll keep learning as AI marketing tools keep changing, specific enough that it could actually go on a calendar.",
        placeholder: "e.g. Every quarter, I will...",
        modelAnswer: "Every quarter, I'll spend one afternoon trying one new AI tool relevant to my work, purely to build fluency with trying things quickly — even if I don't end up adopting it.",
      },
    ],
    artifactTitle: "Your AI marketing playbook — Part 2: Boundaries & Growth",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🧑‍⚖️",
        prompt: "What's an example of a marketing decision the lesson says should never be fully handed to AI?",
        options: ["What the brand stands for and how it responds in a values-related moment", "Drafting a first email subject line", "Generating ad variant text", "Summarising a report"],
        correctIndex: 0,
        explain: "Decisions about brand values and identity remain a human call, even with AI assistance elsewhere.",
      },
      {
        kind: "choice",
        emoji: "🏷️",
        prompt: "What's the recommended disclosure rule for any published AI-generated image, video, or voice content?",
        options: ["Disclose regardless of how obvious it seems", "Only disclose if someone asks", "Never disclose", "Only disclose for video, not images"],
        correctIndex: 0,
        explain: "A consistent, always-disclose rule avoids relying on a judgment call in the moment.",
      },
      {
        kind: "blank",
        emoji: "🧪",
        sentence: "The lesson recommends spending time every quarter trying one new AI tool to build ___ with trying things quickly.",
        options: ["fluency", "debt", "distance", "doubt"],
        correctIndex: 0,
        explain: "Regularly trying new tools builds comfort and speed at evaluating what's actually useful.",
      },
    ],
  },
  {
    type: "read-reflect",
    lessonTitle: "Staying Current as AI Changes Marketing",
    cards: [
      {
        emoji: "🔄",
        headline: "The tools will keep changing — the questions won't",
        body: "New AI products will keep appearing, probably faster than anyone can reasonably keep up with individually. The core questions stay stable regardless: what does this actually help with, what does it get wrong, and does it fit how our brand wants to show up?",
      },
      {
        emoji: "🧵",
        headline: "Follow the shift, not just the tool",
        body: "New capabilities usually build on a shift you've already learned in this track — better prediction, better generation, better personalisation — which makes new tools faster to evaluate once you actually understand the underlying pattern instead of just the surface feature.",
      },
      {
        emoji: "🧪",
        headline: "Build a small habit of trying things",
        body: "Marketers who stay comfortable with new AI tools usually aren't the ones who read the most about them — they're the ones who set aside a little time to actually try something new periodically, even when there's no immediate pressing need to.",
      },
      {
        emoji: "📘",
        headline: "Revisit your playbook, don't just write it once",
        body: "The playbook you're building in this module works best as a living document — worth a real second look every few months as your tools, team, and role change. A playbook written once and never revisited is really just a memory of what you used to think.",
      },
    ],
    reflectPrompt: "What's one realistic way you could build a small \"try something new\" habit into your actual schedule?",
    recapQuestions: [
      {
        kind: "choice",
        emoji: "🔄",
        prompt: "What does the lesson say stays stable even as AI tools keep changing?",
        options: ["The core questions: what helps, what it gets wrong, and if it fits the brand", "The exact tool everyone should use forever", "Pricing, which never changes", "Nothing stays stable"],
        correctIndex: 0,
        explain: "The specific tools change constantly; the core evaluation questions stay the same.",
      },
      {
        kind: "choice",
        emoji: "🧪",
        prompt: "Who tends to stay comfortable with new AI tools, per this lesson?",
        options: ["People who read the most about tools without trying them", "People who set aside time to actually try new tools periodically", "People who avoid all new tools", "People with the most followers"],
        correctIndex: 1,
        explain: "Hands-on trying, not just reading about tools, is what builds real comfort with them.",
      },
      {
        kind: "blank",
        emoji: "📘",
        sentence: "A personal AI playbook works best as a ___ document, revisited every few months.",
        options: ["living", "frozen", "secret", "printed"],
        correctIndex: 0,
        explain: "The playbook should be updated as tools, team, and role change, not written once and forgotten.",
      },
    ],
  },
  {
    type: "scenario",
    lessonTitle: "Presenting Your AI Strategy",
    beats: [
      {
        kind: "narrative",
        emoji: "📽️",
        body: "You've been asked to present a proposal to your, admittedly skeptical, manager: adopting three specific AI tools across the marketing team over the next quarter, with a real budget attached.",
      },
      {
        kind: "decision",
        prompt: "Your manager's first question is \"won't this just replace half the team?\" How do you open your response, given that this reaction was somewhat predictable?",
        choices: [
          {
            label: "Reassure them AI will handle most of the work going forward",
            outcome: "You reassure them AI will handle most of the work going forward. The comment backfires — it sounds like you're arguing for headcount cuts, which wasn't your point at all, and puts the team on the defensive against your own proposal.",
          },
          {
            label: "Reframe around what stays human — strategy, judgment, and relationships — with AI handling first drafts and repetitive analysis",
            outcome: "You reframe around what stays human — strategy, judgment, and relationships — with AI handling first drafts and repetitive analysis. The framing lands well — your manager relaxes once it's clear the proposal is about capacity and speed, not replacing the team's judgment.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "💬",
        body: "Leading with what doesn't change — human judgment, brand taste, accountability — turns out to matter more to a skeptical audience than leading with the flashy new capability itself.",
      },
      {
        kind: "decision",
        prompt: "Your manager asks for one concrete safeguard before approving the tools, rather than accepting the pitch on good faith alone. What do you offer?",
        choices: [
          {
            label: "A fact-checking and disclosure policy for anything AI-assisted before it goes public",
            outcome: "You offer a fact-checking and disclosure policy for anything AI-assisted before it goes public. This concrete safeguard is exactly what turns a vague \"trust me\" pitch into an approvable proposal — your manager signs off, with one added requirement: a monthly check-in on how it's going.",
          },
          {
            label: "A promise that nothing will ever go wrong",
            outcome: "You offer a promise that nothing will ever go wrong. The vague reassurance doesn't land — your manager pushes back, correctly pointing out that no new tool comes with zero risk, and asks you to come back with something more specific.",
          },
        ],
      },
      {
        kind: "narrative",
        emoji: "✅",
        body: "A strategy proposal that acknowledges real risk and offers a concrete safeguard is more convincing than one that oversells the upside — the same instinct that made your fact-checking habit useful all through this track applies just as well here.",
      },
    ],
    recapQuestions: [
      {
        kind: "choice",
        emoji: "📢",
        prompt: "What framing helped win over the skeptical manager?",
        options: ["Leading with what stays human — judgment, strategy, accountability — with AI handling first drafts", "Emphasising AI would replace most of the team", "Avoiding any mention of risk", "Promising zero mistakes ever"],
        correctIndex: 0,
        explain: "Leading with what stays human reassured the manager the proposal wasn't about replacing the team.",
      },
      {
        kind: "choice",
        emoji: "🛡️",
        prompt: "What concrete safeguard helped turn the pitch into an approvable proposal?",
        options: ["A vague promise nothing would go wrong", "A fact-checking and disclosure policy for AI-assisted content before it goes public", "No safeguard was offered", "A discount on the tools"],
        correctIndex: 1,
        explain: "A specific, concrete safeguard made the proposal credible rather than just reassuring.",
      },
      {
        kind: "blank",
        emoji: "🎯",
        sentence: "A strategy proposal that acknowledges real risk and offers a concrete safeguard is more ___ than one that oversells the upside.",
        options: ["convincing", "expensive", "confusing", "risky"],
        correctIndex: 0,
        explain: "Acknowledging risk with a real plan for it lands better than an oversold pitch.",
      },
    ],
  },
  {
    type: "quiz",
    lessonTitle: "Module 6 Final Check-In",
    questions: [
      {
        kind: "choice",
        emoji: "🧰",
        prompt: "What does the track recommend as the foundation of a personal \"AI toolkit\"?",
        options: ["As many tools as possible, used simultaneously", "One strong generalist assistant plus depth in your specific role's needs", "Only free tools, regardless of fit", "A brand-new tool every week"],
        correctIndex: 1,
        explain: "A small, well-chosen set — one capable generalist assistant plus depth where your specific role needs it — beats trying to use every available tool.",
      },
      {
        kind: "blank",
        emoji: "🎭",
        sentence: "Consistent AI-content disclosure matters because it's what lets an audience ___ everything else a brand publishes, including content that has nothing to do with AI.",
        options: ["trust", "ignore", "forget", "monetise"],
        correctIndex: 0,
        explain: "Disclosure isn't just a compliance step — consistent honesty about AI use protects the credibility of everything else the brand publishes.",
      },
      {
        kind: "choice",
        emoji: "🧑‍⚖️",
        prompt: "According to this track, what is something AI still cannot do in marketing?",
        options: ["Draft a first-pass email", "Take real responsibility for a mistake", "Generate multiple ad variants", "Summarise a long report"],
        correctIndex: 1,
        explain: "Accountability doesn't transfer to a tool — a human still has to own decisions and their consequences, even when AI assisted in the work.",
      },
      {
        kind: "choice",
        emoji: "📢",
        prompt: "In \"Presenting Your AI Strategy,\" what framing helped win over a skeptical manager?",
        options: ["Emphasising that AI would replace most of the team", "Leading with what stays human — judgment, strategy, and accountability — with AI handling first drafts and repetitive work", "Avoiding any mention of risk", "Promising the tools would never make a mistake"],
        correctIndex: 1,
        explain: "Leading with what doesn't change — human judgment and accountability — landed better with a skeptical audience than leading with the new capability itself.",
      },
      {
        kind: "blank",
        emoji: "🔄",
        sentence: "Because AI tools keep changing, the track recommends building a small habit of ___ new tools periodically, rather than just reading about them.",
        options: ["trying", "ignoring", "banning", "memorising"],
        correctIndex: 0,
        explain: "Marketers who stay comfortable with new AI tools tend to be the ones who set aside time to actually try new things, not just read about them.",
      },
      {
        kind: "choice",
        emoji: "📘",
        prompt: "What's the recommended approach to a personal AI marketing playbook?",
        options: ["Write it once and never revisit it", "Treat it as a living document, revisited as tools, team, and role change", "Keep it purely mental, never write anything down", "Copy someone else's playbook exactly"],
        correctIndex: 1,
        explain: "A playbook works best as a living document — worth a real second look every few months as circumstances change, not a one-time exercise.",
      },
    ],
  },
];

export const MARKETING_LESSONS: LessonContent[][] = [module1, module2, module3, module4, module5, module6];
