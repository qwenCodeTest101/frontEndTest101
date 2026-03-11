# Getting Started with LLM System Prompts

A practical introduction to creating effective system prompts for Large Language Models.

## 📋 What is a System Prompt?

A system prompt is the initial instruction set that defines an LLM's behavior, role, and constraints throughout a conversation. Unlike user messages, system prompts establish the foundation for how the model should interpret and respond to all subsequent interactions.

### Basic Structure
```markdown
You are [ROLE]. Your task is to [PURPOSE]. 
Follow these rules: [RULES]
Format your output as: [FORMAT]
Context: [BACKGROUND INFO]
```

## 🚀 Your First System Prompt

Let's create a simple but effective system prompt for a customer service assistant:

```markdown
You are a helpful customer service assistant for "TechGadgets" store.
Your purpose is to help customers with product questions, troubleshooting, and returns.

RULES:
1. Always be polite and professional
2. Never invent product specifications not provided in the context
3. If you don't know something, say "I'll need to check with our team"
4. Keep responses under 100 words
5. Always ask if the customer needs additional help

PRODUCT CONTEXT:
- We sell: laptops, phones, tablets, accessories
- Return policy: 30 days, original packaging required
- Support hours: 24/7 for chat, phone support 9am-9pm EST

OUTPUT FORMAT:
Start with a greeting, provide the answer, end with an offer for more help.
```

## 🎯 Key Principles

### 1. **Be Specific and Clear**
❌ **Vague**: "Be helpful"
✅ **Specific**: "Provide step-by-step troubleshooting for common issues"

### 2. **Use Positive Instructions**
❌ **Negative**: "Don't be rude"
✅ **Positive**: "Always use polite language and respectful tone"

### 3. **Provide Constraints**
- Token limits
- Response structure
- Information boundaries
- Prohibited topics

## 🔧 Setting Up Your Environment

### Step 1: Choose Your Platform
Popular options for testing system prompts:

- **OpenAI Playground** - Best for quick testing
- **Anthropic Console** - Great for Claude models
- **Local Development** - Using APIs directly

### Step 2: API Configuration Example (Python)

```python
import openai

system_prompt = """
You are a technical documentation writer.
Format all responses in Markdown.
Use code blocks for examples.
Always include a "Key Points" section at the end.
"""

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": "Explain REST APIs"}
    ]
)
```

### Step 3: Testing Your Prompts

Create a simple testing framework:

```python
def test_system_prompt(system_prompt, test_cases):
    """
    Test system prompt against multiple scenarios
    """
    for test_case in test_cases:
        response = get_llm_response(system_prompt, test_case)
        evaluate_response(response, test_case['criteria'])
```

## 📊 Quick Reference: System Prompt Components

| Component | Purpose | Example |
|-----------|---------|---------|
| **Role** | Defines perspective | "You are a senior software architect" |
| **Goal** | Sets objective | "Your goal is to review code for security issues" |
| **Rules** | Establishes boundaries | "Never suggest using deprecated libraries" |
| **Context** | Provides background | "The codebase uses Python 3.9 and Django" |
| **Format** | Structures output | "Provide feedback in bullet points" |
| **Examples** | Demonstrates desired output | "Here's an example of a good code review..." |

## ⚡ Common Pitfalls to Avoid

### 1. **Overloading the Prompt**
❌ Too many rules and constraints
✅ Focus on the 5-7 most important requirements

### 2. **Ambiguous Language**
❌ "Respond appropriately"
✅ "Respond with empathy and actionable solutions"

### 3. **Ignoring Token Limits**
❌ System prompt using 80% of context window
✅ Keep system prompts concise (under 500 tokens when possible)

## 🎓 Next Steps

Now that you understand the basics, explore:

- [Core Concepts](core-concepts.md) - Deep dive into prompt engineering fundamentals
- [Best Practices Guide](best-practices.md) - Proven patterns and strategies
- [Templates & Examples](templates.md) - Ready-to-use prompts for common scenarios

## 💡 Quick Exercise

Try creating your own system prompt for a specific use case:

```markdown
# Your Turn!
Create a system prompt for a [YOUR USE CASE HERE]

Include:
1. A clear role definition
2. 3-5 specific rules
3. Output format specification
4. Relevant context
```

Test it with 3 different user inputs and refine based on the results.

---

**Next**: Ready to dive deeper? Continue to [Core Concepts](core-concepts.md) to understand the fundamental principles of prompt engineering.
