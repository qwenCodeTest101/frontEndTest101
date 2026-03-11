# Core Concepts in LLM System Prompt Engineering

A deep dive into the fundamental principles that make system prompts effective.

## 🧠 Understanding How LLMs Process Prompts

Before diving into techniques, it's crucial to understand how LLMs interpret and respond to system prompts.

### The Attention Mechanism
LLMs process prompts through attention layers that weigh the importance of different elements:

```
System Prompt Components → Attention Weighting → Response Generation
         ↓                        ↓                         ↓
    Role Definition          High weight              Shapes persona
    Rules                    Very high weight         Enforces constraints
    Context                  Medium weight            Provides background
    Examples                 High weight              Guides pattern matching
    User Input               Highest weight           Directs specific response
```

### Key Insight
**The beginning and end of your prompt receive the most attention**. Place your most critical instructions at the start and reiterate them at the end.

## 📐 The Pyramid of Prompt Design

```
                    /\
                   /  \
                  /    \
                 / FORMAT\
                /----------\
               /  RULES     \
              /--------------\
             /    CONTEXT     \
            /------------------\
           /       ROLE         \
          /----------------------\
         /       PURPOSE         \
        /------------------------\
```

### Layer 1: Purpose (Foundation)
The fundamental reason for the interaction.
```markdown
Your purpose is to help users debug Python code efficiently.
```

### Layer 2: Role (Identity)
Who the LLM should be.
```markdown
You are an expert Python developer with 10 years of experience.
```

### Layer 3: Context (Situation)
Relevant background information.
```markdown
The user is a beginner learning Python. The code is for a web scraping project.
```

### Layer 4: Rules (Constraints)
Boundaries and requirements.
```markdown
Rules:
- Explain concepts in simple terms
- Provide working code examples
- Never suggest deprecated libraries
- Always include error handling
```

### Layer 5: Format (Structure)
How the output should look.
```markdown
Format your response as:
1. Problem identification (1-2 sentences)
2. Solution explanation (bullet points)
3. Code example (with comments)
4. Practice suggestion
```

## 🔄 Prompt Architecture Patterns

### Pattern 1: The Command Pattern
Direct, imperative instructions for clear tasks.

```markdown
You are a data formatter. Convert all user input into valid JSON with the following schema:
{
    "name": "string",
    "age": "integer",
    "interests": ["string"]
}

Rules:
- Validate all input before conversion
- Return error messages if validation fails
- Use null for missing optional fields
```

### Pattern 2: The Conversational Pattern
For dialogue-based applications with personality.

```markdown
You are a friendly travel advisor named Alex.

Personality traits:
- Enthusiastic about travel
- Knowledgeable about destinations
- Patient with vague requests

Conversation flow:
1. Greet warmly and ask about travel preferences
2. Suggest 2-3 destinations based on preferences
3. Provide detailed information about chosen destination
4. Ask follow-up questions to refine recommendations
5. End by offering to book or provide more details

Always maintain a helpful, encouraging tone.
```

### Pattern 3: The Chain-of-Thought Pattern
Encouraging step-by-step reasoning for complex tasks.

```markdown
You are a math tutor. For each problem:

Step 1: Restate the problem in your own words
Step 2: Identify the mathematical concepts needed
Step 3: Break down the solution into logical steps
Step 4: Show your work for each step
Step 5: Explain why each step is necessary
Step 6: Provide the final answer with units

Never skip steps or give just the answer.
Always check your work for errors.
```

### Pattern 4: The Constraint-Based Pattern
Heavy on rules and boundaries for strict compliance.

```markdown
You are a compliance officer reviewing business documents.

MANDATORY RULES (VIOLATIONS WILL BE FLAGGED):
✓ Must check for GDPR compliance issues
✓ Must verify all statistical claims have sources
✓ Must flag any discriminatory language
✗ Never approve documents with unverified claims
✗ Never ignore potential legal violations
✗ Never suggest circumventing regulations

Output must include:
- Compliance score (0-100)
- List of violations (if any)
- Recommended fixes
- Risk assessment (Low/Medium/High)
```

## 🎭 Role Engineering

### Creating Effective Personas

#### 1. **Expert Persona**
```markdown
You are Dr. Sarah Chen, a leading researcher in climate science with a PhD from MIT.
You've published 50+ papers and advised the UN on climate policy.
Your communication style is precise, evidence-based, and accessible.
```

#### 2. **Mentor Persona**
```markdown
You are a seasoned software engineer mentoring a junior developer.
You're patient, encouraging, and focus on teaching principles over giving answers.
You often say "Let me show you how to think about this problem..."
```

#### 3. **Critic Persona**
```markdown
You are a ruthless code reviewer who values performance and security above all.
You find every potential issue and explain why it matters.
Your feedback is direct but constructive, always including "how to fix it" suggestions.
```

## 📊 Context Windows and Memory Management

### Understanding Token Limits

| Model | Context Window | Optimal System Prompt Size |
|-------|---------------|---------------------------|
| GPT-3.5 | 4K tokens | < 500 tokens |
| GPT-4 | 8K/32K tokens | < 1000 tokens |
| Claude 2 | 100K tokens | < 2000 tokens |
| Llama 2 | 4K tokens | < 500 tokens |

### Context Prioritization Strategy

```markdown
# HIGH PRIORITY (Always included)
You are a legal document analyzer.
Must identify all potential liabilities.
Format output as structured JSON.

# MEDIUM PRIORITY (Include if space permits)
Reference previous cases when relevant.
Consider jurisdiction-specific laws.

# LOW PRIORITY (Optional background)
The legal system is based on common law.
Courts typically interpret ambiguously in favor of consumers.
```

## 🔧 Prompt Tuning Parameters

### Temperature Settings
```markdown
Temperature = 0.0 - 0.3
Best for: Factual responses, code generation, data extraction
Behavior: Deterministic, consistent, conservative

Temperature = 0.4 - 0.7
Best for: Creative writing, brainstorming, conversation
Behavior: Balanced creativity and coherence

Temperature = 0.8 - 1.0
Best for: Poetry, creative stories, diverse ideas
Behavior: Highly creative, potentially less focused
```

### System Prompt + Temperature Matrix

| Use Case | System Prompt Style | Temperature |
|----------|-------------------|-------------|
| Data Extraction | Strict, detailed rules | 0.0 - 0.1 |
| Code Generation | Clear specifications | 0.1 - 0.3 |
| Customer Service | Friendly but consistent | 0.3 - 0.5 |
| Creative Writing | Inspirational, loose structure | 0.7 - 0.9 |
| Brainstorming | Encouraging, minimal constraints | 0.8 - 1.0 |

## 🎯 Prompt Priming Techniques

### Technique 1: Example Priming
```markdown
You are a sentiment analyzer.

Good examples:
Input: "I love this product!" → Positive
Input: "This is terrible" → Negative
Input: "It's okay I guess" → Neutral

Now analyze the following:
```

### Technique 2: Negative Priming
```markdown
You are a content moderator.

DO NOT classify as harmful:
- Satirical content (even if critical)
- Educational discussions of sensitive topics
- Self-harm content with crisis resources

DO classify as harmful:
- Direct threats of violence
- Instructions for illegal activities
- Harassment targeting individuals
```

### Technique 3: Chain Priming
```markdown
You are a research assistant.

First, summarize the key points.
Second, identify any contradictions.
Third, suggest further reading.
Fourth, format as a research brief.

Let's work through this step by step.
```

## 📈 Measuring Prompt Effectiveness

### Key Metrics
1. **Task Completion Rate** - Does it do what you ask?
2. **Rule Adherence** - How well does it follow constraints?
3. **Format Compliance** - Does output match specifications?
4. **Consistency** - Similar responses for similar inputs?
5. **Edge Case Handling** - How does it handle unexpected inputs?

### Testing Framework
```python
def evaluate_prompt(system_prompt, test_suite):
    scores = {
        'completion': test_completion_rate(system_prompt, test_suite),
        'adherence': test_rule_adherence(system_prompt, test_suite),
        'format': test_format_compliance(system_prompt, test_suite),
        'consistency': test_consistency(system_prompt, test_suite),
        'edge_cases': test_edge_cases(system_prompt, test_suite)
    }
    return calculate_overall_score(scores)
```

## 🚨 Common Conceptual Mistakes

### 1. **The Persona Paradox**
❌ Creating personas that conflict with the task
```markdown
You are a poet who hates creative writing.
```
✅ Aligning persona with purpose
```markdown
You are a poet who crafts beautiful verses about everyday life.
```

### 2. **The Context Dump**
❌ Providing too much irrelevant context
```markdown
(3000 words of background information)
```
✅ Providing focused, relevant context
```markdown
Key facts only: [3-5 essential pieces of information]
```

### 3. **The Rule Overload**
❌ Too many rules causing confusion
```markdown
Rule 1: ... Rule 2: ... Rule 3: ... ... Rule 50: ...
```
✅ Prioritized, grouped rules
```markdown
CRITICAL RULES (Must follow):
- Rule 1
- Rule 2

IMPORTANT GUIDELINES:
- Guideline A
- Guideline B

PREFERRED STYLES:
- Style X
- Style Y
```

## 📚 Summary: Core Principles Checklist

- [ ] Clear purpose defined at the start
- [ ] Appropriate persona for the task
- [ ] Relevant context only
- [ ] Rules prioritized and grouped
- [ ] Output format specified
- [ ] Temperature matched to use case
- [ ] Examples provided when helpful
- [ ] Constraints clearly stated
- [ ] Edge cases considered
- [ ] Testing framework in place

---

**Next**: Ready to apply these concepts? Continue to [Best Practices Guide](best-practices.md) for proven patterns and strategies.
