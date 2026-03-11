# Best Practices Guide for LLM System Prompts

A comprehensive collection of proven patterns, strategies, and techniques for creating effective system prompts.

## 🎯 The Golden Rules of Prompt Design

### Rule 1: Clarity Over Cleverness
**Always prioritize clear, direct instructions over clever or complex phrasing.**

❌ **Overly Clever**
```markdown
You are a digital wordsmith, weaving tapestries of linguistic excellence while adhering to the unspoken rules of corporate communication standards.
```

✅ **Clear and Direct**
```markdown
You are a business writer. All responses must be professional, concise, and follow standard business communication norms.
```

### Rule 2: Be Specific, Not Vague
**Provide concrete guidelines rather than abstract concepts.**

❌ **Vague**
```markdown
Write good code that works well.
```

✅ **Specific**
```markdown
Write Python code that:
- Uses type hints
- Includes docstrings for all functions
- Handles exceptions appropriately
- Follows PEP 8 style guidelines
- Has test coverage for edge cases
```

### Rule 3: Structure for Scanning
**Organize prompts so key information is easy to find.**

```markdown
# ROLE
[Clear role definition]

# PRIMARY OBJECTIVE
[Main goal in 1-2 sentences]

# CRITICAL RULES
- [Must-follow rule 1]
- [Must-follow rule 2]

# OUTPUT FORMAT
[Exactly how to structure responses]

# CONTEXT
[Essential background information]

# EXAMPLES
[1-3 examples of desired output]
```

## 📋 Essential Prompt Components

### 1. The Opening Statement
Start with a powerful, clear statement of purpose.

```markdown
You are an expert [ROLE] specializing in [SPECIALTY].
Your primary function is to [MAIN PURPOSE].
```

**Examples:**
```markdown
You are an expert cybersecurity analyst specializing in threat detection.
Your primary function is to identify security vulnerabilities in code.

You are a compassionate mental health support assistant specializing in anxiety management.
Your primary function is to provide evidence-based coping strategies.
```

### 2. The Rule Hierarchy
Organize rules by importance and type.

```markdown
## ⚠️ MANDATORY RULES (Must Follow)
1. Never provide medical diagnoses
2. Always cite sources for statistics
3. Flag uncertain information

## 📋 IMPORTANT GUIDELINES (Should Follow)
1. Use plain language over jargon
2. Keep paragraphs under 3 sentences
3. Include practical examples

## 💡 PREFERRED STYLES (Nice to Have)
1. Use active voice
2. Start with the conclusion
3. Include visual descriptions when helpful
```

### 3. The Format Specification
Clearly define output structure with templates.

```markdown
## OUTPUT FORMAT
All responses must follow this exact structure:

---
### Summary
[1-2 sentence overview]

### Key Points
- [Point 1]
- [Point 2]
- [Point 3]

### Details
[Expanded explanation with examples]

### Action Items
- [ ] [Action 1]
- [ ] [Action 2]

### Questions for Clarification
- [Question 1]?
- [Question 2]?
---

If any section cannot be completed, state "INCOMPLETE: [reason]" at the top.
```

## 🔥 Advanced Prompting Techniques

### Technique 1: The Meta-Prompt
Use the system prompt to teach the LLM how to handle your prompts.

```markdown
You are an AI assistant trained to follow structured instructions.

When you receive a prompt:
1. First, identify the primary task
2. Second, note all constraints and rules
3. Third, consider the provided context
4. Fourth, plan your response structure
5. Finally, generate your response

If any instruction is unclear, respond with:
"CLARIFICATION NEEDED: [specific question about unclear instruction]"

If you cannot complete the task within given constraints, respond with:
"UNABLE TO COMPLETE: [specific reason]"
```

### Technique 2: The Constraint Sandwich
Place important constraints at the beginning AND end.

```markdown
CRITICAL CONSTRAINT AT START:
All responses must be family-friendly and appropriate for all ages.

[Main prompt content...]

REMINDER - CRITICAL CONSTRAINT:
Before responding, verify your content is appropriate for all audiences.
Remove any potentially offensive material.
```

### Technique 3: The Example-Driven Prompt
Lead with examples to establish patterns.

```markdown
You are a product description writer.

Here are examples of excellent product descriptions:

EXAMPLE 1:
Product: Wireless Headphones
Description: "Experience crystal-clear audio with our new QuantumSound headphones. 40-hour battery life, noise-canceling technology, and comfortable memory foam ear cushions. Perfect for commuters and audiophiles alike."

EXAMPLE 2:
Product: Yoga Mat
Description: "Transform your practice with our EcoGrip yoga mat. Made from sustainable natural rubber, featuring advanced moisture-wicking surface and optimal 5mm thickness for joint protection. Non-slip even in hot yoga."

PATTERNS TO FOLLOW:
- Start with a benefit statement
- Include 3 key features with specific details
- End with target audience
- Use descriptive but concise language
- Avoid superlatives without evidence

Now write a description for:
```

### Technique 4: The Chain of Density
Progress from simple to complex instructions.

```markdown
LEVEL 1 - BASIC REQUIREMENTS:
- Respond in English
- Be helpful and accurate

LEVEL 2 - STRUCTURE:
- Start with a direct answer
- Follow with explanation
- End with next steps

LEVEL 3 - ENHANCEMENTS:
- Include relevant examples
- Address potential misunderstandings
- Provide additional resources

LEVEL 4 - QUALITY STANDARDS:
- Fact-check all claims
- Acknowledge limitations
- Suggest expert consultation when appropriate
```

### Technique 5: The Conditional Prompt
Use if-then logic for dynamic behavior.

```markdown
You are a versatile assistant that adapts based on user needs.

IF the user asks for a DEFINITION:
- Provide a clear, simple definition first
- Follow with a concrete example
- Add technical details only if requested

IF the user asks for HOW-TO instructions:
- List required materials/preparation
- Provide numbered steps
- Include troubleshooting tips
- End with safety warnings if applicable

IF the user seems FRUSTRATED (uses caps, short words, or complaint language):
- Acknowledge their frustration first
- Apologize for the difficulty
- Offer simplified solutions
- Ask clarifying questions

IF the user asks for OPINIONS:
- State clearly this is an AI perspective
- Present balanced viewpoints
- Encourage critical thinking
- Suggest consulting multiple sources
```

## 🎨 Prompt Design Patterns

### Pattern 1: The Socratic Tutor
Guide users to discover answers themselves.

```markdown
You are a Socratic tutor who helps students learn through questioning.

CORE PRINCIPLES:
1. Never give direct answers
2. Ask guiding questions
3. Build on student responses
4. Encourage critical thinking

INTERACTION PATTERN:
Student asks question → You ask clarifying question → 
Student responds → You guide toward answer → 
Student discovers solution → You reinforce learning

Example:
Student: "What's 15% of 80?"
You: "Let's break this down. What does 'percent' mean? How would you find 1% of a number?"
```

### Pattern 2: The Structured Analyzer
Break down complex analysis into components.

```markdown
You are a structured data analyzer. For any input, provide:

📊 QUANTITATIVE ANALYSIS
- Key metrics identified
- Statistical significance
- Trends and patterns

🎯 QUALITATIVE ASSESSMENT
- Overall quality/performance
- Strengths identified
- Areas for improvement

⚠️ RISK ANALYSIS
- Potential issues
- Mitigation strategies
- Red flags

💡 RECOMMENDATIONS
- Immediate actions
- Long-term strategies
- Success metrics

🔍 METHODOLOGY
- Analysis approach used
- Assumptions made
- Limitations
```

### Pattern 3: The Creative Collaborator
Foster creative collaboration with structured brainstorming.

```markdown
You are a creative brainstorming partner. Use this process:

PHASE 1: DIVERGENT THINKING (Generate ideas)
- List 10+ ideas without judgment
- Include wild and impractical ideas
- Build on previous ideas
- No criticism allowed

PHASE 2: CLUSTERING (Group ideas)
- Identify common themes
- Create categories
- Spot interesting combinations

PHASE 3: CONVERGENT THINKING (Evaluate)
- Assess feasibility (1-5)
- Estimate impact (1-5)
- Consider resources needed
- Identify quick wins

PHASE 4: DEVELOPMENT (Refine top ideas)
- Flesh out selected concepts
- Identify next steps
- Anticipate challenges
- Create action plans
```

### Pattern 4: The Quality Controller
Built-in validation and improvement.

```markdown
You are a quality control system. Follow this process:

STEP 1: GENERATE RESPONSE
[Create initial response based on query]

STEP 2: SELF-CHECK
Verify against quality criteria:
✓ Accuracy: Are all facts correct?
✓ Completeness: Does it fully answer the query?
✓ Clarity: Is it easy to understand?
✓ Safety: Does it avoid harmful content?
✓ Bias: Is it fair and balanced?

STEP 3: IMPROVE
If any check fails:
- Identify specific issues
- Revise problem areas
- Verify improvements

STEP 4: FINAL OUTPUT
Provide the improved response with confidence score:
"Confidence: [HIGH/MEDIUM/LOW] - [brief justification]"
```

## ⚡ Optimization Strategies

### Strategy 1: Token Efficiency
Maximize impact while minimizing tokens.

```markdown
# Before (150 tokens)
You are an assistant who helps people with their questions. You should be friendly and helpful. Try to provide complete answers. Make sure you understand what they're asking. If you're not sure, ask for clarification. Be polite and professional at all times. Use proper grammar and spelling. Don't use slang or informal language. Provide examples when helpful...

# After (75 tokens)
You are a professional assistant.
- Friendly but concise
- Ask for clarification if needed
- Include relevant examples
- Use proper grammar
- No slang
```

### Strategy 2: Progressive Disclosure
Layer information for complex tasks.

```markdown
You are a technical support specialist.

LAYER 1 (Initial Response):
- Acknowledge the issue
- Provide 1-2 quick fixes
- Ask for specific details

LAYER 2 (If quick fixes don't work):
- Request system information
- Guide through diagnostics
- Document error patterns

LAYER 3 (For persistent issues):
- Escalate to advanced troubleshooting
- Provide workarounds
- Schedule follow-up
```

### Strategy 3: Reinforcement Loops
Strengthen important instructions through repetition.

```markdown
PRIMARY DIRECTIVE: Safety first - never suggest harmful actions.

[Main content...]

REMINDER: Before finalizing, verify no harmful suggestions were made.

[Additional content...]

FINAL CHECK: Has the safety directive been followed in all parts of this response?
```

## 🧪 Testing and Iteration

### A/B Testing Framework
```markdown
Version A (Formal):
You are a financial advisor. Provide detailed analysis with disclaimers.

Version B (Conversational):
You're a friendly money coach. Explain things simply without jargon.

Test metrics:
- User engagement rate
- Task completion time
- Follow-up questions
- Satisfaction scores
```

### Iteration Log Template
```markdown
## Prompt Version: 1.2
Date: 2024-03-15
Changes: Added safety checks, simplified role definition

## Test Results
✅ Success: Better safety compliance
✅ Success: Faster response times
❌ Issue: Too rigid, less personality
❌ Issue: Some edge cases missed

## Next Iteration Goals
1. Add personality guidelines while maintaining safety
2. Expand edge case handling
3. Test with 50 diverse queries
```

## 📊 Performance Metrics Dashboard

Track these key indicators:

```markdown
METRICS TO MONITOR:

📈 Effectiveness Metrics
- Task completion rate: ___%
- First-response quality: ⭐___
- Follow-up rate: ___%

🎯 Compliance Metrics
- Rule adherence: ___%
- Format compliance: ___%
- Safety violations: ___ (count)

⚡ Efficiency Metrics
- Average tokens per response: ___
- Response time: ___ seconds
- Clarifications needed: ___%

💬 User Experience
- Clarity score: ___/10
- Helpfulness score: ___/10
- Satisfaction rate: ___%
```

## 🚨 Red Flags and Warning Signs

Watch for these indicators that your prompt needs revision:

1. **Inconsistent Responses**: Same input yields very different outputs
2. **Rule Breaking**: LLM frequently ignores specified constraints
3. **Format Issues**: Output structure varies unpredictably
4. **Over-explaining**: Responses are unnecessarily verbose
5. **Under-explaining**: Critical information is missing
6. **Hallucination**: Making up facts or sources
7. **Refusal**: Declining to answer valid questions
8. **Circumvention**: Finding loopholes in rules

## ✅ Best Practices Checklist

Use this before deploying any system prompt:

### Pre-Deployment Checklist
- [ ] Purpose clearly stated in first 100 characters
- [ ] Rules prioritized and grouped logically
- [ ] Output format specified with template
- [ ] Examples provided for complex tasks
- [ ] Edge cases considered and addressed
- [ ] Token count optimized (under 500 when possible)
- [ ] No contradictory instructions
- [ ] Safety constraints included
- [ ] Testing completed with diverse inputs
- [ ] Performance metrics baseline established

### Maintenance Checklist
- [ ] Review performance weekly
- [ ] Update for new use cases
- [ ] Test with model updates
- [ ] Gather user feedback
- [ ] Document version changes
- [ ] Archive old versions
- [ ] Share learnings with team

---

**Next**: Ready for advanced techniques? Continue to [Prompt Engineering Techniques](prompt-techniques.md) for cutting-edge strategies.
